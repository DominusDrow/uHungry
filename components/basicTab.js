import React from 'react';
import {  View, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import ScreenOrders from '../screens/admin/ScreenOrders';
import ScreenActives from '../screens/admin/ScreenActives';
import ScreenHistory from '../screens/admin/ScreenHistory';

import { useState, useEffect } from 'react';

import { getData } from '../firebase/ReadDB';

export default () => {
const [index, setIndex] = React.useState(0);
const [PEDIDOS, setPEDIDOS] = useState([]);

useEffect(() => {
  const unsubscribe = getData('pedidos', setPEDIDOS);

  return () => unsubscribe();
}, []);

return (
  <>
  
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Por aceptar"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'megaphone-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Activos"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Historial"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'clipboard-outline', type: 'ionicon', color: 'white' }}
      />
    </Tab>


    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{width: '100%' }}>
        <ScreenOrders pedidos={PEDIDOS} />
      </TabView.Item>
      <TabView.Item style={{ width: '100%',}}>
        <ScreenActives pedidos={PEDIDOS} />
      </TabView.Item>
      <TabView.Item style={{ width: '100%',}}>
        <ScreenHistory pedidos={PEDIDOS} />
      </TabView.Item>
    </TabView>
  </>
);
};

