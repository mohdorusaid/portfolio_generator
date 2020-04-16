import React from 'react';
import Basics from './Basics';
import ProfileImage from './ProfileImage';
import { Button } from 'react-bootstrap';
import AddSkill from './AddSkill';
import { connect } from 'react-redux';
import AddProjects from './AddProjects';
import { createPortfolio } from '../../store/actions/portfolioActions';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
 
class FormContainer extends React.Component{
    //STATE
    state={
        step: 1,
        name: '',
        email: '',
        intro:'',
        facebook:'',
        github:'',
        twitter:'',
        linkedIn:'',
        roles:[],
        photoURL:'',
        skills:[],
        projects:[],
        exists: false
    }
    
    
    //PROCEED STEP
    nextStep=()=>{
        const {step }=this.state;
        this.setState({
            step: step+1
        })
    }

    //PREVIOUS STEP
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step: step - 1
        })
    }

    handlePicture=url=>{
        this.setState({
            photoURL: url
        })
    }

    handleRoles=(e)=>{
        if(e.target.checked){
            console.log(e.target.id,"Checked!");
            const { roles } =this.state;
            const newRoles = roles.concat(e.target.id);
            this.setState({
                roles: newRoles
            })
        }
        else{
            const { roles }=this.state;
            const newRoles=roles.filter(role=> role !== e.target.id);
            this.setState({
                roles: newRoles
            })
        }
    }

    handleSkills=skill=>(e)=>{
        if(e.target.checked){
            console.log(skill,"Checked!");
            const { skills } = this.state;
            const newSkills = skills.concat({
                name: skill.name,
                category: skill.category,
                icon: skill.icon
            });
            this.setState({
                skills : newSkills
            })
        }
        else{
            console.log(e.target.id,"Unchecked!");
            const { skills } =this.state;
            const newSkills= skills.filter(currskill=> currskill.name !== e.target.id);
            this.setState({
                skills : newSkills
            })
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleProject=(project)=>{
        const { projects } = this.state;
        console.log(project,"Adding it!");
        const newProjects = projects.concat({...project})
        this.setState({
            projects : newProjects
        })
    }

    handlePortfolio=(e)=>{
        e.preventDefault();
        this.props.createPortfolio(this.state);
    }

    componentDidMount(){
        const { auth } =this.props;
        console.log(this.props);
        if(auth.uid){
            this.setState({
                uid: auth.uid,
                name: auth.displayName,
                email: auth.email
            })
        }
    }
    render(){
        var values={
            ...this.state
        }

        if(!this.state.exists){
            const { portfolio } = this.props;
            if(portfolio && portfolio.length > 0){
                const currPortfolio = portfolio[0];
                this.setState({
                    ...currPortfolio,
                    exists: true,
                })
            }
        }

        const { step }=this.state;
        
        console.log(this.state);

        switch (step) {
            case 1:
                return(
                    <Basics
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    handleRoles={this.handleRoles}
                    values={values}
                    />
                )
            case 2:
                return(
                    <ProfileImage 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handlePicture={this.handlePicture}
                    authId={this.props.auth.uid}
                    values={values}
                    />
                )
            case 3:
                return(
                    <AddSkill
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    categories={values.roles} //changed state to values
                    handleSkills={this.handleSkills}
                    values={values}
                    />
                )
            case 4:
                return(
                    <AddProjects
                    categories={values.roles} //changed state to values
                    projects={values.projects} //changed state to values
                    handleProject={this.handleProject}
                    prevStep = {this.prevStep}
                    createPortfolio={this.handlePortfolio}
                    created={this.props.portfolio[0]}
                    validated={
                        !(this.state.projects.length > 0 && this.state.intro.length > 0 && this.state.facebook.length > 0 && this.state.roles.length > 0 && this.state.photoURL.length > 0 && this.state.skills.length > 0
                    )}
                    id={this.props.auth.uid}
                    />
                )
            default:
                return (
                    <div>
                       <h1>Oops!</h1>
                       <h2>There seems to be an error.</h2>
                       <a href="/">Go to Home</a>
                    </div>
                )
        }
    }
}


const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createPortfolio: (details)=>dispatch(createPortfolio(details))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect((ownProps)=>[{
    collection: 'portfolios',
    doc: ownProps.user,
    storeAs: 'portfolio'
}]))(FormContainer);
