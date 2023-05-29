import { View, Text, TouchableOpacity, SafeAreaView,Dimensions} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import OrderItem from "../../components/OrderItem";

import { useState } from "react";

export default function ScreenOrders({ navigation, pedidos }) {
const [forceUpdate, setForceUpdate] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center',width: Dimensions.get("window").width}}>
      {/*<OrderItem productInfo={PEDIDOS[1]}/>*/}

      <FlatList
        data={pedidos.filter((pedido) => pedido.statusOrder === "historial")}
        scrollEnabled={true}
        keyExtractor={item => item.id.toString()}
        renderItem={ itemData => (
          <OrderItem productInfo={itemData.item} tipo={'historial'} setForceUpdate={setForceUpdate} />
        )}
        showsVerticalScrollIndicator={false}
        extraData={forceUpdate}
        />
    </View>
  );
}
