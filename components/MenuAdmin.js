import React from 'react';
import {Image} from 'react-native';
import icono1 from '../assets/icons/finanzas.svg';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


import { useDispatch } from "react-redux";
import * as authActions from "../redux/authentication/authReducer";



const MenuAdmin = (props) => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
      dispatch(authActions.logout());
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };





  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Sección 1 */}
        <DrawerItem
          label="Pedidos"
          icon={({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 1
            props.navigation.navigate('Pedidos');
          }}
        />

        {/* Sección 2 */}
        <DrawerItem
          label="Productos"
          icon={({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 2
            props.navigation.navigate('Productos');
          }}
        />

        {/* Sección 3 */}
        <DrawerItem
          label="Finanzas"
          icon={({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 3
            props.navigation.navigate('Finanzas');
          }}
        />

        {/* Sección 4 */}
        <DrawerItem
          label="Cuenta"
          icon={({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          )}
          onPress={() => {
            // Navegar a la sección 4
            props.navigation.navigate('Cuenta');
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

export default MenuAdmin;

