
import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, Text } from 'react-native';

const BurgerMenu = () => {
  const menuPosition = useRef(new Animated.Value(-200)).current;

  const openMenu = () => {
    Animated.timing(menuPosition, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(menuPosition, {
      toValue: -200,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={openMenu}>
        <Text>Mostrar menú</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: menuPosition,
          width: 200,
          height: '100%',
          backgroundColor: 'white',
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={closeMenu}>
          <Text>Cerrar menú</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Elemento 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Elemento 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Elemento 3</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default BurgerMenu;

