import { View, Text,FlatList, StyleSheet, Dimensions, Modal ,TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import { Divider, Icon, Button, ListItem} from '@rneui/themed';

const OrderItem = ({ productInfo }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <Icon name='alert-circle-outline' type='ionicon' color='black' />
        <View style={{ flexDirection: 'column', marginLeft: 50 }}>
          <Text style={styles.text}>ID del pedido: {productInfo.id}</Text>
          <Text style={styles.subText}>Usuario: {productInfo.usuario}</Text>
        </View>
        <Text style={{ marginLeft: 50, color: 'grey', fontSize: 12, }}>
          Presiona aquí para ver el detalle.
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={{width: '80%', height: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, flexDirection: 'column'}}>
            <Text style={styles.modalText }>Detalle del pedido.</Text>
            <Text style={{fontSize: 20,fontWeight: 'normal',marginBottom: 15,marginLeft: 20,}}>ID del pedido: {productInfo.id}</Text>
            
            <Divider width={3} color='grey' marginBottom={15} />
            <Text style={styles.modalText}>Para: </Text>
            <Text style={{fontSize: 25,fontWeight: 'normal',marginBottom: 15,marginLeft: 60,}}>{productInfo.usuario}</Text>
            <Divider width={3} color='grey' marginBottom={15} />
            <Text style={styles.modalText}>Productos: </Text>

            <FlatList
              data={productInfo.products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Text>Cantidad: {item.quantity} - Producto: {item.name}</Text>
              )}
             />            
            
            <Button
              title="Cerrar"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
    shadowColor: '#283031',
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 30,fontWeight: 'bold',marginBottom: 10,
  },
});

