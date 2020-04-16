import React from 'react';
import { Container, Card, CardActions,CardContent, Button, Chip, CircularProgress } from '@material-ui/core';
import '../Mastersheet.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom'; 

class Projects extends React.Component{
    render(){
        const { portfolio } = this.props;
        if(portfolio){
            if(portfolio.length > 0){
                return(
                    <div className="center">
                        <h1>{portfolio[0].name}'s Projects</h1>
                        {
                            (portfolio[0].projects.map((project,index)=>{
                               return (<Card key={index}>
                                <CardContent>
                                    <h1>{project.title}</h1>
                                        <h4>Tags</h4>
                                    <span>
                                        {project.category.map(category=>{
                                            return <Chip label={category} key={category}/>
                                        })}
                                    </span>
                                    <p>{project.description}</p>
                                </CardContent>
                                <CardActions>
                                    <div className="center">
                                    <Link to={project.link}>
                                    <Button>Check it out</Button>
                                    </Link>
                                    </div>
                                </CardActions>
                            </Card>)
                            }))
                        }
                    </div>
                )
            }
            else{
                return(
                    null
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
        portfolio : state.firestore.ordered.portfolios
    }
}

export default compose(connect(mapStateToProps),firestoreConnect((ownProps)=>[{
    collection : 'portfolios',
    doc: ownProps.match.params.id
}]))(Projects);


//CARD CODE

