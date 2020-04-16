import React from 'react';
import { Container, Paper, Button, CircularProgress} from '@material-ui/core';
import {Tabs,Tab} from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Skills from './Skills';
import SocialMedia from './SocialMedia';
import '../Mastersheet.css';

class Portfolio extends React.Component{
    render(){
        console.log(this.props);
        const { portfolio } = this.props;
        if(portfolio){
            if(portfolio.length > 0){
                return (
                    <div className="center portfolio_bg">
                        <div className="test center circular" style={{width:"200px",height:"200px"}}>
                        <img src={portfolio[0].photoURL} alt="profile-picture" title="Awesome me!" />
                        </div>
                        <h1>Hello,World!</h1>
                        <span style={{wordWrap:'break-word'}}>
                        <h2>{portfolio[0].name}.</h2>
                        </span>
                        <span style={{width:"100%",wordWrap:"break-word"}}>
                            <h2>
                        {
                            (portfolio[0].roles.map(role=>{
                            return role+". "
                            }))
                        }
                        </h2>
                        </span>
                        <span style={{wordWrap:'break-word'}}>
                        <h4>{portfolio[0].email}</h4>
                        </span>
                    <Container>
                        <div className="social-media-section">
                        
                         <SocialMedia 
                         facebook={portfolio[0].facebook} 
                         twitter={portfolio[0].twitter} 
                         email={portfolio[0].email} 
                         linkedIn={portfolio[0].linkedIn} 
                         github={portfolio[0].github} 
                         />
                        </div>
                        <div className="center" style={{marginTop:"10px",marginBottom:"10px"}}>
                            <Paper elevation={3} style={{backgroundColor:'aliceblue'}}>
                                <div style={{padding:"10px"}}>
                                <h4>{portfolio[0].intro}</h4>
                                </div>
                            </Paper>
                        </div>
                        <div className="main-content">
                            <h1>My Skills.</h1>
                                <div className="portfolio_cover">
                                <Skills 
                                skills={portfolio[0].skills}
                                categories={portfolio[0].roles}/>
                                </div>
                        <span>
                            <Link to={this.props.match.url + "/projects"}>
                            <Button>Go To Projects</Button>
                            </Link>
                            <Link to={this.props.match.url + "/achievements"}>
                            <Button>Go To achievements</Button>
                            </Link>
                        </span>
                        <div>
                            {(this.props.auth.uid === this.props.match.params.id)?
                            (   
                                <div style={{marginTop:"25px"}}>
                                <h3>Add Something Today.</h3>
                                <span>
                                    <Link to="/create">
                                        <Button>Update Portfolio</Button>
                                    </Link>
                                </span>
                                </div>
                            )
                            :
                            (
                                (this.props.auth.uid)?(
                                    <div style={{marginTop:"25px"}}>
                                        <h1>Hi,there!</h1>
                                        <Link to={'/'+ this.props.auth.uid}>
                                        <Button>GO TO YOUR PROFILE</Button>
                                        </Link>
                                    </div>
                                ):(
                                    <div style={{marginTop:"25px"}}>
                                        <h5>Want a Portfolio?</h5>
                                        <Link to='/'>
                                            TAKE ME THERE
                                        </Link>
                                    </div>
                                )
                            )
                        }
                        </div>
                        </div>
                    </Container>
            </div>
                )
            }
            else{
                return (
                    <div className="vertical-center">
                        <h1>No Portfolio Exists 404</h1>
                    </div>
                )
            }
        }
        else{
            return(
                <div className="vertical-center">
                <CircularProgress/>
                </div>
            )
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        portfolio : state.firestore.ordered.portfolios,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps),firestoreConnect((ownProps)=>[{
    collection : 'portfolios',
    doc : ownProps.match.params.id
}]))(Portfolio);