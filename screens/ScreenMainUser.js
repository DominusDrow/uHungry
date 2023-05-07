import {  View, FlatList, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';
import { CarousellCmp } from '../components/CarousellCmp';

import RestaurantCard from '../components/RestaurantCard';



import { Header, Icon, Avatar } from '@rneui/themed';


import { RESTAURANT } from '../dummy-data/data';

export default function ScreenMainUser(props) {

  return (
    <View>


      <Header
        leftComponent={
          <View>

            <TouchableOpacity
              onPress={() => { props.navigation.openDrawer() }}
            >

              <Icon type="entypo" name="menu" size={30} color="white" />
            </TouchableOpacity>
          </View>


        }
        rightComponent={
          <View style={styles.headerRight}>

            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => { console.log('search') }}
            >
              <Icon type="entypo" name="shopping-cart" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <View style={styles.headerContainer}>
            <Avatar
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <Text style={styles.subheaderText}>John</Text>
          </View>
        }
      />     



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


const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#397af8',
    width: '100%',
    flexDirection: 'row',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

