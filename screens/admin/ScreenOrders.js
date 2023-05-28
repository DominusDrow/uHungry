import { View, Text, TouchableOpacity, SafeAreaView,Dimensions} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../components/OrderItem";
import { PEDIDOS} from "../../dummy-data/pedidos";


export default function ScreenOrders({ navigation }) {
  console.log(PEDIDOS.length)
  return (
    <View style={{ flex: 1, alignItems: 'center',width: Dimensions.get("window").width}}>
      <OrderItem productInfo={PEDIDOS[1]}/>
      <FlatList
        data={PEDIDOS}
        scrollEnabled={true}
        keyExtractor={item => item.id.toString()}
        renderItem={ itemData => (
          <OrderItem productInfo={itemData.item}/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
