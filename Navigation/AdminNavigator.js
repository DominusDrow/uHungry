import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuAdmin from '../components/MenuAdmin';

import ScreenAccount from '../screens/admin/ScreenAccount';
import ScreenMainAdmin from '../screens/admin/ScreenMainAdmin';
import ScreenProducts from '../screens/admin/ScreenProducts';
import ScreenFinances from '../screens/admin/ScreenFinances';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const StackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Pedidos"
      drawerContent={(props) => <MenuAdmin {...props} />}
    >
      <Drawer.Screen 
        name="Pedidos"
        component={ScreenMainAdmin}
        options={{ headerShown: false }} 
      />
      <Drawer.Screen 
        name="Productos"
        component={ScreenProducts}
      />
      <Drawer.Screen
        name="Finanzas"
        component={ScreenFinances}
      />
      <Drawer.Screen
        name="Cuenta"
        component={ScreenAccount}
      />
    </Drawer.Navigator>
  );
}


export const StackAdmin = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};

