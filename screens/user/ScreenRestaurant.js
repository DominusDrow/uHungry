import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar, ScrollView, FlatList }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

import ProductCard from '../../components/ProductCard';

export const ScreenRestaurant = ({ navigation, route }) => {

  const { productInfo } = route.params;

  const redirect = () => {
    navigation.navigate('ScreenProduct', { productInfo });
  }

  const redirectBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: productInfo.background }} style={styles.image} />

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Image source={{ uri: productInfo.image }} style={styles.logo} />
        <Text style={styles.text}>{productInfo.name}</Text>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 10 }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon type="material" name="timer" size={15} color="gray" style={{ marginTop: 5 }} />
            <Text style={styles.subText}>Entrega: </Text>
          </View>
          <Text style={styles.subText}>{productInfo.deliveryFee} min</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon type="material" name="star" size={15} color="#FFD700" style={{ marginTop: 5 }} />
            <Text style={styles.subText}>Calificación: </Text>
          </View>
          <Text style={styles.subText}>{productInfo.rating}</Text>
        </View>

      </View>

      <ScrollView style={{ width: '100%', marginTop: 10 }} showsVerticalScrollIndicator={false}>

        <FlatList
          data={productInfo.products}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <ProductCard navigation={navigation} productInfo={itemData.item}/>
          )}
        />

      </ScrollView>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: Dimensions.get('window').width,

  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.4,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  subText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 50,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 30,
  },

});

