import React from 'react';
import { Button,FormControlLabel,Checkbox } from '@material-ui/core';
import { Tabs,Tab } from 'react-bootstrap';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

class AddSkill extends React.Component{
    render(){       
        const { categories,skills,values }=this.props;
        return(
            <div className="center">
                <h1>Add Your Skills.</h1>
                <h3>You Can Also Update Them Later.</h3>
                <Tabs>
                {categories && categories.map(category=>{
                    return (<Tab eventKey={category} title={category}>
                        {skills && skills.filter(skill=>skill.category === category).map(skill=>{
                            return (
                                <FormControlLabel key={skill.id}
                                control={<Checkbox id={skill.name} 
                                onChange={this.props.handleSkills(skill)}
                                defaultChecked={values.skills.some(currSkill=> currSkill.name === skill.name)}
                               />}
                                label={skill.name.toUpperCase()}
                                />
                            )
                        })}
                    </Tab>)
                })}
                </Tabs>                 
                <span>
                    <Button onClick={this.props.prevStep}>Previous</Button>
                    <Button onClick={this.props.nextStep}>Next</Button>
                </span>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        skills: state.firestore.ordered.skills 
    }
}

export default compose(connect(mapStateToProps),firestoreConnect([{
    collection: 'skills'
}]))(AddSkill); 