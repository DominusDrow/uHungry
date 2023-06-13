import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"

import { login } from '../redux/authentication/authReducer'
import { useDispatch } from 'react-redux/es'

const dispatch = useDispatch()

async function tryLogin(email, password){
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        if (!user.emailVerified){
            await user.sendEmailVerification();
        }else{
            const data = {
                type: user.userType,
                userInfo: {
                    mail: user.email
                }
            }
            dispatch(login(data))
        } 

    } catch (error) {
        console.log("Error al Iniciar sesion");
    }
}

async function signUp(email = '', password = ''){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.log("Error al registrarse");
    }
}

module.exports = {
    tryLogin,
    signUp
}