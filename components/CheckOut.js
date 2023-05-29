import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {Icon } from '@rneui/themed';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as cartActions from '../validators/actions/cartActions';
import * as authActions from '../validators/actions/authActions';

import { addData } from '../firebase/ReadDB';


const CheckOut = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePedir = () => {
    // Lógica para procesar el pedido aquí
    setModalVisible(false);
    addData('pedidos', cart);
    dispatch(authActions.updateStatus('recibido'));
    dispatch(cartActions.deleteAllItems());
    navigation.navigate('ScreenMainUser');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>Realizar pedido</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleCloseModal}>
                <Icon type="material" name="arrow-back" size={25} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Confirmar pedido</Text>
              <View style={styles.placeholder} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Total a pagar:</Text>
              <Text style={styles.infoValue}> $ {cart.total}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Método de pago:</Text>
              <Text style={styles.infoValue}>En efectivo</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Tiempo de entrega:</Text>
              <Text style={styles.infoValue}>20 minutos</Text>
            </View>

            <TouchableOpacity style={styles.pedirButton} onPress={handlePedir}>
              <Text style={styles.pedirButtonText}>Pedir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 100, 250, 0.8)',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 50, // Espacio en blanco a la izquierda del header
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop : 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  infoLabel: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    flex: 2,
  },
  pedirButton: {
    backgroundColor: 'rgb(0, 150, 250)',
    paddingHorizontal: 100,
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 100,
  },
  pedirButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CheckOut;
