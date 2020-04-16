import React from 'react';
import { TextField, FormControlLabel, Checkbox,Container,Button, Chip } from '@material-ui/core';

class AddProjects extends React.Component{
    state={
        title:'',
        description:'',
        link:'',
        category:[]
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChecks=(e)=>{
        if(e.target.checked){
            const { category} = this.state;
            const newCategories = category.concat(e.target.id);
            this.setState({
                category: newCategories
            })
        }
        else{
            const { category } = this.state;
            const newCategories = category.filter(ind=> ind !== e.target.id);
            this.setState({
                category: newCategories
            })
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleProject(this.state);

    }
    render(){
        const { categories,projects } = this.props;
        console.log(this.props);
        return(
            <Container>
                <div className="center">
                    <div>
                    <h1>Add A Project.</h1>
                    <h3>You can add more later.</h3>
                    <div className="center">
                    <TextField id="title" label="Name Of Your Project" fullWidth onChange={this.handleChange}/>
                    <TextField id="description" label="Say something about this project" multiline rows={3} fullWidth onChange={this.handleChange}/>
                    <h1>Choose Category</h1>
                    {categories && categories.map(category=>{
                        return <FormControlLabel key={category}
                        control={<Checkbox id={category} onChange={this.handleChecks}/>}
                        label={category}
                        />
                    })}
                      
                    <TextField id="link" label="Link To Your Project" fullWidth onChange={this.handleChange}/>
                    <Button onClick={this.handleSubmit}>Create Project</Button>
                    </div>
                    <div className="created-projects">
                        <h1>Created Projects Appear Here!</h1>
                        {(projects)?(
                            projects.length > 0  && projects.map(project=>{
                                return <Chip label={project.title}/>
                            })
                        ):(
                            <h1>No Projects.Yet.</h1>
                        )}
                    </div>
                    </div>
                    <span>
                        <Button onClick={this.props.prevStep}>Previous</Button>
                        <Button onClick={this.props.createPortfolio} disabled={this.props.validated}>Create Portfolio</Button>
                    </span>

                    <div>
                        {(this.props.created)?
                        (
                            <a href={"/"+ this.props.id}>Go to Portfolio</a>
                        ):
                        (
                            <h5>Link will appear here after creating Portfolio</h5>
                        )}
                    </div>
                </div>
            </Container>
        )
    }
}

export default AddProjects;