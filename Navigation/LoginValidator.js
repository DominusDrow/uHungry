import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StackLogin, StackMain} from './AppNavigator';

const LoginValidation = (props) => {
    const isAuth = useSelector(state=>state.auth.login);
    return (
        <NavigationContainer>
            {isAuth && <StackMain/>}
            {!isAuth && <StackLogin/>}
        </NavigationContainer>
    );
}

export default LoginValidation;
