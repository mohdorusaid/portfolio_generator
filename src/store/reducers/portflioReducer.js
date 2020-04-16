const portfolioReducer=(state={},action=>{
    switch(action.type){
        case 'ADD_PORTFOLIO_SUCCESS':
            return {
                ...state
            }
        case 'ADD_PORTFOLIO_ERR':
            return {
                ...state
            }
        default:
            return state;
    }
})

export default portfolioReducer;