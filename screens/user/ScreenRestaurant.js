import { View, Text, Image, StyleSheet, Dimensions }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ScreenRestaurant = ({ navigation, route }) => {

  const { productInfo } = route.params;

  const redirect = () => {
    navigation.navigate('ScreenProduct', { productInfo });
  }

  const redirectBack = () => {
    navigation.goBack();
  }



  return(
    <View style={styles.container}>
      <Image source={{ uri: productInfo.background }} style={styles.image} />
      <View style={{flexDirection: 'row' }}>
        <Image source={{ uri: productInfo.image }} style={styles.logo} />
        <Text style={styles.text}>{productInfo.name}</Text>
      </View>
      <TouchableOpacity onPress={() => redirectBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});







