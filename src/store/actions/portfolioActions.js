import { getFirestore } from "redux-firestore";

export const createPortfolio=(details)=>{
    return (dispatch)=>{
        const firestore=getFirestore();
        const docId=details.uid;
        const portfolio={
            ...details,
            exists: false
        }
        firestore.collection('portfolios').doc(docId).set({
            ...portfolio
        }).then(
            dispatch({
                type: 'ADD_PORTFOLIO_SUCCESS'
            })
        ).catch((err)=>dispatch({
            type : 'ADD_PORTFOLIO_ERROR',
            err
        }))
    }
}