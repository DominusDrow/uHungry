import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Dimensions,Image } from 'react-native';
import { useDispatch } from "react-redux";
import { Input } from '@rneui/themed';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { tryLogin } from '../firebase/auth'


const RegistroUsuario = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const dispatch = useDispatch();

  const loginUser = () => {
    try {
      console.log("hola :)");
      //await tryLogin(correo, contrasena);
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cuadrado} >

      </View>
      <Image style={styles.img} source={require("../assets/img/perfil.png")} />
      <View style={styles.QLogin}>
        <View style={styles.Inputs}>
          <Input
          placeholder='Usuario'
          leftIcon={<Icon type="MaterialCommunityIcons" name="account" size={24}/>}
          value={correo}
          onChangeText={(text) => setCorreo(text) }
          />
          <Input
            placeholder='Contraseña'
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            value={contrasena}
            secureTextEntry={true}
            onChangeText={(text) => setContrasena(text) }
          />
        </View>
        <View style={{position:"absolute", marginTop: "100%", marginLeft: "10%"}}>
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#057A8A',
            borderRadius: 50,

          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            
            
          }}
          onPress={() => loginUser()}
        />
        </View>
      </View>

        
      
    </View>
  );
};

const styles = StyleSheet.create({


  ///////////
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
  },

  cuadrado: {
    height: "100%",
    marginTop: "80%",
    padding: Dimensions.get("window").width,
    backgroundColor: "#057A8A",
  },

  QLogin: {
    position:"absolute",
    borderRadius: 1,
    shadowColor: '#52006A',  
    elevation: 20, 
    width: "80%",
    height: 400,
    marginTop: "30%",
    marginLeft: "10%",
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
  },

  Inputs:{
    position: "absolute",
    width: "80%",
    marginTop:"40%"
  },
  
  img: {
    position: "absolute",
    height: 200,
    resizeMode: "contain",
    zIndex: 1,
  },
});

export default RegistroUsuario;
