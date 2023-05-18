import {  View, FlatList, TouchableOpacity, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { HeaderCmp } from '../../components/HeaderCmp';
import { CarousellCmp } from '../../components/CarousellCmp';

import SearchBarCmp from '../../components/SearchBarCmp';

import RestaurantCard from '../../components/RestaurantCard';

import { RESTAURANT } from '../../dummy-data/data';

export default function ScreenMainUser({ navigation }) {

  return (
    <View>

      <HeaderCmp navigation={navigation} />

      <CarousellCmp />

      <SearchBarCmp navigation={navigation} />


      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={RESTAURANT}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <RestaurantCard navigation={navigation} productInfo={itemData.item}/>
          )}
          vertical
        />
      </ScrollView>


    </View>
  );
}


