import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar, ScrollView, FlatList }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import * as cartActions from '../../validators/actions/cartActions';

export const ScreenProduct = ({ navigation, route }) => {

  const dispatch = useDispatch();

  const cantidadItems = useSelector(state => state.cart.cantidadItems);
  const cartTotal = useSelector(state => state.cart.total);

  
  const [count, setCount] = useState(1);
  const { productInfo } = route.params;


  const addToCart = () => {
    try{
      dispatch(cartActions.addToCart(productInfo, count));
    }
    catch(err){
      console.log(err);
    }
      
  }

  const redirectBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={{ uri: productInfo.image }} style={styles.image} />
      <View style={{ flexDirection: 'column', width: '100%' }}>
        <Text style={styles.text}>{productInfo.name}</Text>
        <Text style={styles.subText}>{productInfo.description}</Text>
      </View>

      <View style={styles.backBtn}>
        <TouchableOpacity onPress={redirectBack} style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
          <Icon type="material" name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 10 }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subText}>$ {productInfo.cost} pesos</Text>
          </View>
        </View>


      </View>

      <View style={styles.btnAdd}>
        <TouchableOpacity  style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor:'lightgreen'}}>
          <Text style={{color:"white"}}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnCount}>
        <TouchableOpacity onPress={() => count > 1 ? setCount(count - 1) : setCount(count) } style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor:'white'}}>
          <Icon type='entypo' name='minus' size={25} color='black' />
        </TouchableOpacity>
        <Text tyle={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          {count}
        </Text>
        <TouchableOpacity onPress={() => count < 10 ? setCount(count + 1) : setCount(count)} style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor:'white'}}>
          <Icon type='entypo' name='plus' size={25} color='black' />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: Dimensions.get('window').width,

  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.4,
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  subText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 20,
    alignSelf: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 50,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 30,
  },
  backBtn: {
    position: 'absolute',
    width: Dimensions.get('window').width*0.09,
    height: Dimensions.get('window').width*0.09,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 35,
    overflow: 'hidden',
    left: 10,
    top: 60,
    zIndex: 1,
  },
  btnAdd: {
    position: 'absolute',
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 35,
    overflow: 'hidden',
    right: 20,
    bottom: 30,
    zIndex: 1,
  },
  btnCount: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 35,
    overflow: 'hidden',
    left: 20,
    bottom: 30,
    zIndex: 1,
  },
});

