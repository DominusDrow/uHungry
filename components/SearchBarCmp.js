import React, { useState, useEffect } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, BackHandler } from 'react-native';
import { SearchBar, Icon } from '@rneui/themed';

export default function SearchBarCmp({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (modalVisible) {
        setModalVisible(false);
        return true; // Indica que se ha manejado el evento de regreso
      }
      return false; // Permite el comportamiento predeterminado de regreso
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Limpia el suscriptor cuando el componente se desmonta
  }, [modalVisible]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleBackPress = () => {
    setModalVisible(false);
    return true; // Indica que se ha manejado el evento de regreso
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Icon name="search" color="gray" />
        <Text style={styles.buttonText}>Busca producto</Text>

      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleBackPress}
        onDismiss={() => {}} // Se requiere para Android
      >
        <View>
          <SearchBar
            platform="android"
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            leftIconContainerStyle={styles.iconContainer}
            rightIconContainerStyle={styles.iconContainer}
            loadingProps={{}}
            onChangeText={newVal => setValue(newVal)}
            onClearText={() => setValue('')}
            placeholder="Busca producto"
            placeholderTextColor="#888"
            cancelButtonTitle="Cancel"
            cancelButtonProps={{}}
            onCancel={handleCancel}
            onClear={() => console.log('onClear')}
            value={value}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 40,
  },


  searchContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingHorizontal: 10,
  },
  inputContainer: {
    backgroundColor: '#eee',
    borderRadius: 30,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },


});

