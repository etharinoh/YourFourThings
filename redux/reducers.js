import { combineReducers } from 'redux'
import { user } from './user'

//**only one reducer can be passed so they would be combined here */
const Reducers = combineReducers({
    userState: user
})

export default Reducers;