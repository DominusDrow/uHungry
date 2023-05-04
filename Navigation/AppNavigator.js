import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import ScreenLogin from "../screens/ScreenLogin";
import ScreenMainUser from "../screens/ScreenMainUser";

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
      //drawerContent={(props) => <HeaderCmp {...props} />}
    >
      <Drawer.Screen 
        name="Home" 
        component={ScreenMainUser} 
        options={{ headerShown: false }} />
      <Drawer.Screen 
        name="Settings" 
        component={NoScreenForNow} />
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
    </Stack.Navigator>
  );
};

