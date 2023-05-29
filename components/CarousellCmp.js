import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';

const images = [
  'https://i.ytimg.com/vi/bDsngZVCMiQ/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDchueeY9T_IZSLZQwLxjvgzekKzQZ1zNmGuMRwW4JvjlU9u0yyqWRoQSxP5tG0Dp2blo&usqp=CAU',
  'https://c8.alamy.com/compes/h9ge0g/comida-tradicional-mexicana-cafe-restaurant-y-bar-brillante-color-plano-aislado-conjunto-de-banners-ilustracion-vectorial-h9ge0g.jpg',
  'https://static.vecteezy.com/system/resources/previews/020/011/915/original/food-promotion-banner-free-editor_template.jpeg',
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
          <Image style={styles.image} source={{ uri: item }} />
        )}
        keyExtractor={(index) => index.toString()}
        horizontal
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / widthScreen);
          setCurrentIndex(index);
        }}
        showsHorizontalScrollIndicator={false}
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
  },
  dot: {
    width: 15,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  image: {
    width: widthScreen * 0.9,
    height: 200,
    marginHorizontal: widthScreen * 0.05,
    marginVertical: 10,
    borderRadius: 30,
    resizeMode: 'cover',
  },
});
