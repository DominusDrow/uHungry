import { View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { HeaderCmp } from '../components/HeaderCmp';

export default function ScreenMainUser() {
  return (
    <View >

      <HeaderCmp />

      <SearchBar
        placeholder="Type Here..."
        lightTheme={true}
        platform="ios"
        containerStyle={{ backgroundColor: 'white', margin: 10 }}

      />

    </View>
  );
}

