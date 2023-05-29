import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import MenuUser from '../components/MenuUser';

import ScreenLogin from "../screens/ScreenLogin";
import ScreenMainUser from "../screens/user/ScreenMainUser";
import { ScreenRestaurant } from '../screens/user/ScreenRestaurant';
import { ScreenProduct } from '../screens/user/ScreenProduct';
import ScreenSettings from '../screens/user/ScreenSettings';
import ScreenCart from '../screens/user/ScreenCart';

import RegistroUsuario from '../screens/RegistrarUsuario';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function NoScreenForNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WORK IN PROGRESS</Text>
    </View>
  );
}

export const StackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <MenuUser {...props} />}
    >
      <Drawer.Screen 
        name="ScreenMainUser" 
        component={ScreenMainUser} 
        options={{ headerShown: false }} 
      />
      <Drawer.Screen 
        name="Settings" 
        component={ScreenSettings} 
      />
    </Drawer.Navigator>
  );
}




export const StackLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ScreenLogin"}
        component={ScreenLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"RegistroUsuario"}
        component={RegistroUsuario}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export const StackMain = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ScreenRestaurant"
        component={ScreenRestaurant}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ScreenProduct"
        component={ScreenProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenCart"
        component={ScreenCart}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
