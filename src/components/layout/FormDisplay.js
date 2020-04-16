import React from 'react';
import FormContainer from '../Forms/FormContainer';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import {compose } from 'redux';
import { CircularProgress } from '@material-ui/core';

class FormDisplay extends React.Component{
    render(){
    const { auth } = this.props;
        if(auth.isLoaded){
            if(auth.isEmpty){
                //Not Signed In!
                return(
                    <div className="vertical-center center">
                        <h1>Not Signed In!</h1>
                        <a href="/">Sign In Here.</a>
                    </div>
                )
            }
            else{
                //Signed In.Good To Go!
                // console.log(this.props);
                return(<div className="center">
                    <FormContainer 
                    user={auth.uid}
                    portfolio={this.props.portfolio}/>
                </div>)
            }
        }
        else{
            //Auth Ain't Loaded Boi!
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
        auth : state.firebase.auth,
        portfolio : state.firestore.ordered.portfolio
    }
}

export default compose(connect(mapStateToProps),firestoreConnect((ownProps)=>[
    {
        collection: 'portfolios',
        doc: ownProps.auth.uid,
        storeAs: 'portfolio'
    }
]))(FormDisplay)