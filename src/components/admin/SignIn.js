import React from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle,signOut} from '../../store/actions/authActions';
import '../Mastersheet.css';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';


class SignIn extends React.Component{

    handleSignIn=(e)=>{
      this.props.signIn();
    }

    handleSignOut=(e)=>{
      this.props.signOut();
    }

    render(){
      const {auth}=this.props;
      console.log(this.props);
        return (
          <Container>
              <div className="vertical-center center">
            {
            (auth)?(  
            (auth.uid)
            ?
            (

              <div>
              <h1>Signed In!</h1>
              <Button onClick={this.handleSignOut}>Sign Out</Button>
              <div>
               <Link to="/create">Create Portfolio</Link>
              </div>
              </div>
            ):(
              <div>
              <div className="vertical-center">
              <h1>Sign In To Continue.</h1>
              <Button onClick={this.handleSignIn}>
              Sign in with Google
              </Button>
               </div>
              <div>

              </div>
              </div>
            )):(
              null
            )}
            </div>
          </Container>
        )
      }

}

const mapStateToProps=(state)=>{
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signIn : ()=>dispatch(signInWithGoogle()),
    signOut: ()=>dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);