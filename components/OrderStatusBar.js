import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const OrderStatusBar = ( { navigation, orderStatus } ) => {

  const getStatusColor = () => {
    switch (orderStatus) {
      case 'recibido':
        return '#ffc107'; // Color amarillo
      case 'listo':
        return '#28a745'; // Color verde
      case 'entregado':
        return '#17a2b8'; // Color turquesa
      default:
        return '#000'; // Color negro por defecto
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.statusBar, { backgroundColor: getStatusColor() }]} />
      <View style={styles.statusTextContainer}>
        <Text style={styles.statusText}>Status : {orderStatus}</Text>
      </View>
      <View style={[styles.statusBar, { backgroundColor: getStatusColor() }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusBar: {
    flex: 1,
    height: 6,
    marginHorizontal: 5,
    borderRadius: 2,
  },
  statusTextContainer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default OrderStatusBar;
