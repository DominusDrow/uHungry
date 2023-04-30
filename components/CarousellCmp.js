import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView, Animated } from 'react-native';
import { Image } from "@rneui/base";

const widthScreen = Dimensions.get("window").width;

export const CarouselCmp = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image style={{ width: widthScreen, height: 200 }} source={{ uri: item }} />
        )}
        keyExtractor={(index) => index.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: widthScreen,
    height: 200,
  },
});

