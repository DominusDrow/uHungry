import { View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { Divider, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderItem = ({productInfo}) => {
  console.log(productInfo.usuario)
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Icon name='alert-circle-outline' type='ionicon' color='black'/>
        <View style={{flexDirection:'column', marginLeft:50}}>
          <Text style={styles.text}>ID del pedido: {productInfo.id}</Text>
          <Text style={styles.subText}>Usuario: {productInfo.usuario}</Text>
        </View>
        <Text style={ {marginLeft:50,color: 'grey',fontSize: 12,}}>Presiona aquí para ver el detalle.</Text>
      </TouchableOpacity>
    </>
    
  )
}
export default OrderItem;

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#E7E7E7',
        shadowColor: '#283031',
        shadowOffset: { width: 2, height: 2 },
        borderRadius:10,
        padding: 25,
        width: Dimensions.get('window').width,
        flexDirection:'row',
        
    
    },

    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    subText:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 12,
    }
})

