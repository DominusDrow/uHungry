import {  View, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';
import { CarousellCmp } from '../components/CarousellCmp';
import  BurgerMenu from '../components/BurgerMenu';

export default function ScreenMainUser({ navigation }) {

  return (
    <View>

      <BurgerMenu />
      <HeaderCmp />

      <CarousellCmp />

      <SearchBar
        placeholder="Type Here..."
        lightTheme={true}
        platform="ios"
        containerStyle={{ backgroundColor: 'white', margin: 0, padding: 0 }}
      />


    </View>
  );
}


