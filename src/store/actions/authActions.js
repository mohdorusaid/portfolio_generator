import { googleProvider,AuthInstance } from '../../config/fbConfig'

export const signInWithGoogle=()=>{
    return (dispatch,getState)=>{
        console.log('signing in..');
        AuthInstance.signInWithPopup(googleProvider).then(()=>{
            dispatch({type:'SIGNIN_SUCCESS'});
    
        }).catch((err)=>{
            dispatch({type:'SIGNIN_ERR',err})
        })
    }
}

export const signOut=()=>{
    return (dispatch,getState)=>{
        AuthInstance.signOut().then(()=>{
            dispatch({type: "SIGN_OUT"})
        })
    }
}