import React from 'react';
import Button from '@material-ui/core/Button';
import '../Mastersheet.css';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

class Basics extends React.Component{
    goToNextStep=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values } =this.props;
        console.log("VALUES FROM BASICS",values);
        return(
            <div>
                <h1 className="center">Let's get the basics out first.</h1>
                <form noValidate autoComplete="off">
                    <div className="center" style={{width:"60%"}}>
                    <div>
                     <h3>What Defines You?</h3>
                     <FormControlLabel
                      control={<Checkbox onChange={this.props.handleRoles} id="Developer" className="roles" defaultChecked={values.roles.includes("Developer")}/>}
                      label="Developer"
                      />
                      <FormControlLabel
                      control={<Checkbox onChange={this.props.handleRoles} id="Designer" className="roles" defaultChecked={values.roles.includes("Designer")}/>}
                      label="Designer"
                      />
                      <FormControlLabel
                      control={<Checkbox onChange={this.props.handleRoles} id="Filmmaker" className="roles" defaultChecked={values.roles.includes("Filmmaker")}/>}
                      label="Filmmaker"
                      />
                    </div>
                    <div>
                    <TextField id="intro" label="Say something about you" multiline rows={3} fullWidth onChange={this.props.handleChange("intro")} defaultValue={values.intro}/>
                    </div>
                    <h1 style={{marginTop:"2px",marginBottom:"2px"}}>Your Social Media Handles.</h1>
                    <div>
                        <TextField id="facebook" label="Your Facebook URL" fullWidth onChange={this.props.handleChange("facebook")} defaultValue={values.facebook}/>
                        <TextField id="linkedIn" label="Your LinkedIn URL" fullWidth onChange={this.props.handleChange("linkedIn")} defaultValue={values.linkedIn}/>
                        <TextField id="twitter" label="Your Twitter URL" fullWidth onChange={this.props.handleChange("twitter")} defaultValue={values.twitter}/>
                        <TextField id="github" label="Your GitHub URL" fullWidth onChange={this.props.handleChange("github")} defaultValue={values.github}/>
                    </div>
                    <Button onClick={this.goToNextStep} className="next-button">Next</Button>
                    </div>
                </form>
                              
            </div>
        )
    }
}

export default (Basics);