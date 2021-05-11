import firebase from '../Firebase/config'
import {USER_STATE_CHANGE} from "./constants"

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((result) =>{
            if(result.exists){
                console.log(result.data())
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
      this.setState({journalsFound: results})
      this.setState({refreshJournals: true}) 
      console.log(results)
    })
    .catch((error) => console.error(error))
    
  })
}