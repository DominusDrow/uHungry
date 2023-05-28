import React from 'react';
import { SafeAreaView, StatusBar, Text, FlatList, Image, Button, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function ScreenCart({ navigation }) {
  const cart = useSelector((state) => state.cart.items);

  const renderItem = ({ item }) => (
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
      <Image source={item.image} style={{ width: 50, height: 50 }} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="-" onPress={() => decreaseQuantity(item.id)} />
        <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
        <Button title="+" onPress={() => increaseQuantity(item.id)} />
      </View>
    </View>
  );

  const decreaseQuantity = (itemId) => {
    // Lógica para disminuir la cantidad del producto en el carrito
  };

  const increaseQuantity = (itemId) => {
    // Lógica para aumentar la cantidad del producto en el carrito
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClearCart = () => {
    // Lógica para vaciar el carrito
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={handleBack}>
          <Text>Regresar</Text>
        </TouchableOpacity>
        <Text>Carrito</Text>
        <TouchableOpacity onPress={handleClearCart}>
          <Text>Vaciar</Text>
        </TouchableOpacity>
      </View>
      {cart.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}
