import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';

const images = [
  'https://via.placeholder.com/300x150/000000/FFFFFF?text=Image%201',
  'https://via.placeholder.com/300x150/FF0000/FFFFFF?text=Image%202',
  'https://via.placeholder.com/300x150/0000FF/FFFFFF?text=Image%203',
  'https://via.placeholder.com/300x150/0000FF/FFFFFF?text=Image%204',
];

const widthScreen = Dimensions.get("window").width;

export const CarousellCmp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex });
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={({ item }) => (
          <Image style={{ width: widthScreen, height: 200 }} source={{ uri: item }} />
        )}
        keyExtractor={(index) => index.toString()}
        pagingEnabled
        horizontal



        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / widthScreen);
          setCurrentIndex(index);
        }}
      />

      <View style={styles.dotWrapper}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? '#000' : '#888' },
            ]}
          />
        ))}
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
