//SCREEN 1
import { View, StyleSheet, Text, Image, Dimensions, Alert} from "react-native";
import { Button } from '@rneui/themed';

import { useDispatch } from "react-redux";
import * as authActions from "../redux/authentication/authReducer";

const ScreenLogin = ({ navigation }) => {

  const dispatch = useDispatch();


  const LoginUser = () => {
    navigation.navigate("RegistroUsuario");
  };

  const LoginAdmin = () => {
    try {
      dispatch(authActions.loginAdmin());
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };



  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img/hungry.jpg")} />

      <Button
        title="Login user"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          alignSelf: 'center',
          height: 50,
          width: 200,
          marginVertical: 50,
        }}
        onPress={() => LoginUser()}
      />

      <Button
        title="Login admin"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(128, 255, 128, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          alignSelf: 'center',
          height: 50,
          width: 200,
        }}
        onPress={() => LoginAdmin()}
      />


    </View>
  );
};
export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "80%",
    height: 300,
    marginTop: "30%",
    marginLeft: "10%",
    resizeMode: "contain",
  },

});
