import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';

import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";



const MenuUser = (props) => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
      dispatch(authActions.tryLogout());
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Avatar
          rounded
          size="xlarge"
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          containerStyle={{ alignSelf: 'center', marginTop: 10 }}
        />

        {/* Sección 1 */}
        <DrawerItem
          label="ScreenMainUser"
          icon={({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 1
            props.navigation.navigate('ScreenMainUser');
          }}
        />

        {/* Sección 2 */}
        <DrawerItem
          label="Sttings"
          icon={({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 2
            props.navigation.navigate('Settings');
          }}
        />


        {/* Botón de salida */}
        <DrawerItem
          label="Salir"
          icon={({ color, size }) => (
            <Ionicons name="ios-log-out" color={color} size={size} />
          )}
          onPress={() => {
            logoutHandler();
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default MenuUser;

