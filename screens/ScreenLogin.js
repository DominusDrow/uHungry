//SCREEN 1
import { View, StyleSheet, Text, Image, Dimensions} from "react-native";
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";
import { useSelector } from 'react-redux';

const ScreenLogin = ({ navigation }) => {

  const dispatch = useDispatch();


  function goToNumber() {
    navigation.navigate("ScreenTelefonoValido");
  }


  const onClick = () => {
    try {
      dispatch(authActions.tryTrue());
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };



  return (
    
    <View style={styles.container}>
      
      <View style={styles.cuadrado}>
        
      </View>
      <Image style={styles.img} source={require("../assets/img/perfil.png")} />
      <View style={styles.QLogin}>
        <View style={styles.Inputs}>
          <Input
          placeholder='Usuario'
          leftIcon={<Icon name="account-outline" size={20} />}
          />
          <Input
            placeholder='Contraseña'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          />
        </View>
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#057A8A',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            position: "absolute",
            height: 50,
            width: 200,
            marginTop: "100%",
          }}
          onPress={() => onClick()}
        />
      </View>
    </View>
  );
};
export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
  },

  cuadrado: {
    height: "100%",
    marginTop: "80%",
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
    marginTop:"30%"
  },
  
  img: {
    position: "absolute",
    height: 200,
    resizeMode: "contain",
  },

});
