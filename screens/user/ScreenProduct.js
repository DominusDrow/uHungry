import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar, ScrollView, FlatList }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

export const ScreenProduct = ({ navigation, route }) => {

  const { productInfo } = route.params;

  const redirectBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={{ uri: productInfo.image }} style={styles.image} />
      <View style={{ flexDirection: 'column', width: '100%' }}>
        <Text style={styles.text}>{productInfo.name}</Text>
        <Text style={styles.subText}>{productInfo.description}</Text>
      </View>

      <View style={styles.backBtn}>
        <TouchableOpacity onPress={redirectBack} style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
          <Icon type="material" name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.btnSearch}>
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
          <Icon type="material" name="search" size={25} color="black" />
        </TouchableOpacity>
      </View>




      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 10 }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon type="material" name="timer" size={15} color="gray" style={{ marginTop: 5 }} />
          <Text style={styles.subText}>{productInfo.cost} pesos</Text>
          </View>
        </View>


      </View>

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
  backBtn: {
    position: 'absolute',
    width: Dimensions.get('window').width*0.09,
    height: Dimensions.get('window').width*0.09,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 35,
    overflow: 'hidden',
    left: 10,
    top: 60,
    zIndex: 1,
  },
  btnSearch: {
    position: 'absolute',
    width: Dimensions.get('window').width*0.09,
    height: Dimensions.get('window').width*0.09,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 35,
    overflow: 'hidden',
    right: 10,
    top: 60,
    zIndex: 1,
  },
});

