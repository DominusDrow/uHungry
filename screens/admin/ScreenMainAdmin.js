import {  View, FlatList, TouchableOpacity, Text, StyleSheet, Image, Dimensions,ScrollView } from 'react-native';
import { HeaderCmp } from '../../components/HeaderCmp';
import { Tab, TabView } from '@rneui/themed';
import React from 'react';
import BasicTab from '../../components/basicTab';

export default function ScreenMainAdmin({ navigation }) {
  return (
    
    <ScrollView style={{ overflow: 'false'}}>

      <HeaderCmp navigation={navigation} />
      
      <BasicTab />
      

    </ScrollView>
  );
}


