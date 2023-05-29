import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, FlatList, Image, Button, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@rneui/themed';

import CheckOut from '../../components/CheckOut';
import * as cartActions from '../../validators/actions/cartActions';

export default function ScreenCart({ navigation }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [forceUpdate, setForceUpdate] = useState(0);

  const renderItem = ({ item }) => {
    const quantity = cart.find((cartItem) => cartItem.id === item.id).quantity;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text>{item.name}</Text>
          <Text> $ {item.cost}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button title="-" onPress={() => decreaseQuantity(item)} />
          <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
          <Button title="+" onPress={() => increaseQuantity(item)} />
        </View>
      </View>
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(cartActions.minusItem(item));
    setForceUpdate(forceUpdate + 1);
  };

  const increaseQuantity = (item) => {
    dispatch(cartActions.plusItem(item));
    setForceUpdate(forceUpdate + 1);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClearCart = () => {
    dispatch(cartActions.deleteAllItems());
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
        <TouchableOpacity onPress={handleBack}>
          <Icon type="material" name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Carrito</Text>
        <TouchableOpacity onPress={handleClearCart}>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15 }}>Vaciar</Text>
        </TouchableOpacity>
      </View>
      {cart.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No hay productos en el carrito</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          extraData={forceUpdate} // Agregamos extraData para forzar una actualización cuando cambie forceUpdate
        />
      )}

      {cart.length !== 0 ? <CheckOut navigation={navigation} /> : null}
    </SafeAreaView>
  );
}
