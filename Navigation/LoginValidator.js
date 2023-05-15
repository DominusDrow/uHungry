import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { StackLogin, StackMain} from './UserNavigation';
import { StackAdmin } from './AdminNavigator';

const LoginValidation = (props) => {
    const Auth = useSelector(state=>state.auth.login);
    return (
        <NavigationContainer>
            {Auth === 'user' ? <StackMain /> : Auth === 'admin' ? <StackAdmin /> : <StackLogin />}
        </NavigationContainer>
    );
}

export default LoginValidation;
