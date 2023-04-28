import React from "react";
import { Image } from "@rneui/base";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";

export default function CarouselCmp({ imagenes, height, width }){
  const renderItem = ({ item }) => {
    return (
      <Image
        style={{ width, height }}
        PlaceholderContent={<ActivityIndicator color="fff"/>}
        source={{ uri: item }}
      />
    )
  }

  return (
    <Carousel
      layout={"default"}
      data = {imagenes}
      sliderWidth={width}
      itemWidth={width}
      itemHeight={height}
      renderItem={renderItem}
    />
  )

}

CarouselCmp.propTypes = {
  imagenes: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

