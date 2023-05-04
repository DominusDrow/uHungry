import {  View, FlatList, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';
import { CarousellCmp } from '../components/CarousellCmp';

import RestaurantCard from '../components/RestaurantCard';


import { RESTAURANT } from '../dummy-data/data';

export default function ScreenMainUser(props) {

  return (
    <View>

      <HeaderCmp navigation={props.navigation} />

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
            <RestaurantCard {...props} productInfo={itemData.item}/>
          )}
        />
      </View>


    </View>
  );
}


