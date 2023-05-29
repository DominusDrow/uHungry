import {  View, FlatList, TouchableOpacity, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { HeaderCmp } from '../../components/HeaderCmp';
import { CarousellCmp } from '../../components/CarousellCmp';

import SearchBarCmp from '../../components/SearchBarCmp';

import RestaurantCard from '../../components/RestaurantCard';

import OrderStatusBar from '../../components/OrderStatusBar';

import { RESTAURANT } from '../../dummy-data/data';

import { useSelector } from 'react-redux';

export default function ScreenMainUser({ navigation }) {

  const status = useSelector(state => state.cart.status);

  console.log(RESTAURANT.length)
  return (
    <View>

      <HeaderCmp navigation={navigation} />

      {status !== 'comprando' && <OrderStatusBar />}

      <CarousellCmp />

      <SearchBarCmp navigation={navigation} />


      <FlatList
        data={RESTAURANT}
        scrollEnabled={true}
        keyExtractor={item => item.id.toString()}
        renderItem= {itemData => (
          <RestaurantCard navigation={navigation} productInfo={itemData.item}/>
        )}
        showsVerticalScrollIndicator={false}
      />


    </View>
  );
}


