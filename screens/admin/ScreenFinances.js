import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


export default function ScreenFinances({ navigation }) {

  return (
  <SafeAreaView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity>
        <Text>Presiona aquí HOLA</Text>
      </TouchableOpacity>
    </View>  
  </SafeAreaView>
    
  );
}
