import { View, Text } from "react-native";

import { RESTAURANT } from '../../dummy-data/data';

export default function ScreenSettings({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{RESTAURANT.filter(item => item.id === 1)[0].name}</Text>
    </View>
  );
}
