import firebase from '../Firebase/config'
import {USER_JOURNAL_STATE_CHANGE, USER_STATE_CHANGE} from "./constants"

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((result) =>{
            if(result.exists){
                dispatch({type : USER_STATE_CHANGE, currentUser: result.data()})
            }
            else{
                console.log('no user found')
            }
        })
    })
}
export function fetchJournals(){
    return ((dispatch) => {
    firebase
    .firestore()
    .collection("journals")
    .doc(firebase.auth().currentUser.uid)
    .collection('userJournals')
    .get()
    .then((results) => {
        var Arr =[]
        results.forEach((doc) => {
          Arr.push(doc.data())                         
        })  
      dispatch({type : USER_JOURNAL_STATE_CHANGE, journals: Arr})
    })
    .catch((error) => console.error(error))
    
  })
}