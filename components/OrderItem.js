import { View, Text,FlatList, StyleSheet, Dimensions, Modal ,TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import { Divider, Icon, Button, ListItem} from '@rneui/themed';

const OrderItem = ({ productInfo, tipo, setForceUpdate }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlAccept = () => {
    setModalVisible(false);
    productInfo.statusOrder = 'activo';
    setForceUpdate((prev) => prev + 1);
  };

  const handlReject = () => {
    setModalVisible(false);
    productInfo.statusOrder = 'rechazado';
    setForceUpdate((prev) => prev + 1);
  };

  const handlFinish = () => {
    setModalVisible(false);
    productInfo.statusOrder = 'historial';
    setForceUpdate((prev) => prev + 1);
  };

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
        <View style={{ position: 'absolute', top: 0, left: 40, zIndex: 1 }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Icon name='arrow-undo-circle-outline' type='ionicon' color='black' size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
        <ScrollView style={{width: '80%', height: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, flexDirection: 'column'}}>
            <Text style={styles.modalText }>Detalle del pedido.</Text>
            <Text style={{fontSize: 20,fontWeight: 'normal',marginBottom: 15,marginLeft: 20,}}>ID del pedido: {productInfo.id}</Text>
            
            <Divider width={3} color='grey' marginBottom={15} />
            <Text style={styles.modalText}>Para:  Alfredo</Text>
            <Text style={{fontSize: 25,fontWeight: 'normal',marginBottom: 15,marginLeft: 60,}}>{productInfo.usuario}</Text>
            <Divider width={3} color='grey' marginBottom={15} />

            <Text style={styles.modalText}>Productos: </Text>
            <FlatList
              data={productInfo.items}
              scrollEnabled={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom: 5,}}>
                  <Text style={{fontSize: 25,fontWeight: 'normal',marginBottom: 15,marginLeft: 60,}}>
                  {item.quantity}X    {item.name}
                  </Text>
                  <View style={{marginLeft: 30,}}>
                      <Text style={{fontSize: 25,fontWeight: 'normal',marginBottom: 15,}}>
                        $ {item.cost}
                        <Divider width={3} color='grey' marginBottom={15} />
                      </Text>

                  </View>
                </View>
              )}
             /> 
             
             <Text style={styles.modalText}>Total: $ {productInfo.total}</Text>
             <Divider width={3} color='grey' marginBottom={15} />
             <Text style={styles.modalText}>Espera: 20 min </Text>

                        
            
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>


            {tipo === 'pendiente' ? (
              <>
              <TouchableOpacity
                onPress={handlReject}>
                  <Icon name='close-circle-outline'type='ionicon' color='black' size={80}/>
              </TouchableOpacity>
              <Text style={{fontSize: 25,fontWeight: 'normal'}}>¿Acepta el pedido?</Text>
              <TouchableOpacity 
              onPress={handlAccept}>
                <Icon name='checkmark-circle-outline'type='ionicon' color='black' size={80}/>
              </TouchableOpacity>
              </>
              ) : tipo === 'activo' ? (
                <TouchableOpacity
                onPress={handlFinish}>
                  <Text style={{fontSize: 25,fontWeight: 'normal'}}>Finalizar</Text>
              </TouchableOpacity>
              ) : null}


            </View>

          </ScrollView>
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

