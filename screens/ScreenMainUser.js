import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';
//importaciones para el carousel
import { StyleSheet, Text, View, FlatList, Image, Dimensions, SafeAreaView, Animated } from 'react-native';

const widthScreen = Dimensions.get("window").width;

const images = [
  'https://via.placeholder.com/300x150/000000/FFFFFF?text=Image%201',
  'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=Image%202',
  'https://via.placeholder.com/300x150/0000FF/FFFFFF?text=Image%203',
];

export default function ScreenMainUser() {

  return (
    <View>

      <HeaderCmp />


      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image style={{ width: widthScreen, height: 200 }} source={{ uri: item }} />
        )}
        keyExtractor={(index) => index.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <SearchBar
        placeholder="Type Here..."
        lightTheme={true}
        platform="ios"
        containerStyle={{ backgroundColor: 'white', margin: 0, padding: 0 }}

      />

    </View>
  );
}


