export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ADMIN = 'LOGIN_ADMIN';


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export const tryLogin = (email, password) => {
    let user = null;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });    

    console.log("tryLogin: ", user);
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




