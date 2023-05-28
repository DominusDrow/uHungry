import React from 'react';
import {  View, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import ScreenOrders from '../screens/admin/ScreenOrders';


export default () => {
const [index, setIndex] = React.useState(0);

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
      <TabView.Item style={{ flex: 1, alignItems: 'center'}}>
        <ScreenOrders/>
      </TabView.Item>
      <TabView.Item style={{ flex: 1, alignItems: 'center',}}>
        
      </TabView.Item>
      <TabView.Item style={{ flex: 1, alignItems: 'center', borderColor: 'red' , borderWidth:5}}>
        <Text style={{borderColor: 'red' , borderWidth:5}}>Estos son los cosos</Text>
      </TabView.Item>
    </TabView>
  </>
);
};

