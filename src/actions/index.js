import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  initSession() {
    return(dispatch) => {
     var firebase = require("firebase");
     var config = {
       apiKey: "AIzaSyC1cirj1iG-VMLLAMoj9jN87kASbNfihXU",
       authDomain: "snackhunt-5d80c.firebaseapp.com",
       databaseURL: "https://snackhunt-5d80c.firebaseio.com/",
       storageBucket: "snackhunt-5d80c.appspot.com",
    };
     firebase.initializeApp(config);
// should refactor with this, authData can work, but session can't
     var user;
     firebase.auth().onAuthStateChanged((current)=>{
      if (current) {
       user = {
         id: current.uid,
         name: current.displayName,
         avatar: current.photoURL
       }
      } else {
        user = null;
      };
    setTimeout(() => dispatch(user));
    });
  }
}

  login() {
    return (dispatch) => {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = {
        id: result.user.uid,
        name: result.user.displayName,
        avatar: result.user.photoURL
      }
      firebase.database().ref().child("users").child(result.user.uid).set(user);
      // dispatch user
      dispatch(user);
      });
    }
  }

  logout(){
    return(dispatch) => {
      firebase.auth().signOut();
     setTimeout(() => dispatch(null));
    }
  }
}

export default alt.createActions(Actions);
