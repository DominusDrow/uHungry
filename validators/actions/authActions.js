export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const UPDATE_STATUS = 'UPDATE_STATUS';


import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/config";

export const tryLogin = (email, password) =>{
    let user = null;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
        const errorMessage = error.message;
      });    

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("user");
            return{
                type:LOGIN,
                login: user,
            }
        } else {
            console.log("no user");
        }
    });


    return{
        type:LOGIN,
        login: user,
    };
}

export const tryLoginAdmin = () =>{
    return{
        type:LOGIN_ADMIN
    };
}

export const tryLogout = () =>{
    return{
        type:LOGOUT
    };
}

export const updateStatus = (status) =>{
    return{
        type:UPDATE_STATUS,
        status:status
    };
}



