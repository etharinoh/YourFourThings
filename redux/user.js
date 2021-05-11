import {USER_JOURNAL_STATE_CHANGE, USER_STATE_CHANGE} from './constants'
const initialState = {
    currentUser: null
}

export const user = (state = initialState, action) => {
    switch(action.type){
        case USER_STATE_CHANGE:
           return{
        ...state,
        currentUser: action.currentUser,
    } 
    case USER_JOURNAL_STATE_CHANGE:
        return {
            ...state,
            journals: action.journals
        }
    default:
        return state;
    }
    
    
}