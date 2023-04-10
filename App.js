import { StyleSheet, View, Text } from 'react-native';
import { HeaderMine } from './components/Header';
import { SearchBar } from '@rneui/themed';

export default function App() {
  return (
    <View >

      <HeaderMine />

      <SearchBar
        placeholder="Type Here..."
      />

    </View>
  );
}

