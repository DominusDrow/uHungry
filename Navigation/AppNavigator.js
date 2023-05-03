import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenLogin from "../screens/ScreenLogin";
import ScreenMainUser from "../screens/ScreenMainUser";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function noScreenForNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WORK IN PROGRESS</Text>
    </View>
  );
}

export const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={ScreenMainUser}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={noScreenForNow}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="search" size={size} color={color} />;
          },
        }}
      />

      </Tab.Navigator>
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
        name="ScreenMainUser"
        component={ScreenMainUser}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

