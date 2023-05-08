import {  View, FlatList, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';
import { CarousellCmp } from '../components/CarousellCmp';

import RestaurantCard from '../components/RestaurantCard';

import { RESTAURANT } from '../dummy-data/data';

export default function ScreenMainUser({ navigation }) {

  return (
    <View>

      <HeaderCmp navigation={navigation} />

      <CarousellCmp />

      <SearchBar
        placeholder="Type Here..."
        lightTheme={true}
        platform="ios"
        containerStyle={{ backgroundColor: 'white', margin: 0, padding: 0 }}
      />


      <View >
        <FlatList
          data={RESTAURANT}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <RestaurantCard navigation={navigation} productInfo={itemData.item}/>
          )}
        />
      </View>


    </View>
  );
}


