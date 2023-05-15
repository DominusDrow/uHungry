import { View, Text, Image, StyleSheet, Dimensions }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ScreenRestaurant = ({ navigator, route }) => {

  const { productInfo } = route.params;

  return(
    <View>
      <Image source={{uri: productInfo.background}} style={styles.resImg} opacity={0.5}/>
      <View style={styles.headerOutInfo}>
        <Image source={{uri: productInfo.image}} style={styles.resLogoImg}/>
        <View style={styles.headerOutInfoText}>
          <Text style={styles.headerOutInfoText1}>{productInfo.name}</Text>
          <Text style={styles.headerOutInfoText2}>Ver mas información {'>'}</Text>
        </View>
      </View>
      <View style={styles.headerIn}>
        <View style={styles.resIconInfo}>

          <Text style={styles.resInfoText}>Entrega en: {productInfo.deliveryTime}</Text>
        </View>
        <View style={styles.resIconInfo}>

          <Text style={styles.resInfoText}>Costo de envio: ${productInfo.deliveryFee}.00</Text>
        </View>
        <View style={styles.resIconInfo}>

          <Text style={styles.resInfoText}>Calificación promedio: {productInfo.rating}</Text>
        </View>

        <View style={styles.iconHeart}>

        </View>

        <View style={styles.iconShare}>

        </View>

        <View style={styles.buttonsDeliveryMethod}>
          <TouchableOpacity>
            <View style={styles.deliveryOn}>
              <Text style={styles.deliveryTextOn}>Entrega a Domicilio</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.deliveryOff}>
              <Text style={styles.deliveryTextOff}>Recoger en tienda</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonAdicional}>

          <Text style={styles.textAdicional1}>5% adicional por servicio. Descuentos para Prime.</Text>
          <Text style={styles.textAdicional2}>Ver detalle</Text>
        </View>
      </View>
    </View>
  )



}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1:{
    height:Dimensions.get('window').height * 0.150,
    width:Dimensions.get('window').width * 1,
    borderRadius:15,
    flex:1,
    flexDirection: "row",
  },
  input:{
    width: Dimensions.get('window').width*0.75,
    height:'37%',
    marginTop:'14%',
    marginLeft: Dimensions.get('window').width*0.2,
    backgroundColor:'white',
    borderRadius:5,
    paddingLeft:17,
    flexDirection: "row",
    color:'black',
    borderColor:'grey',
    borderWidth:0.18,
    overflow: 'hidden',
  },
  botonBuscar1:{
    marginLeft: -Dimensions.get('window').width*0.11,
    marginTop: Dimensions.get('window').height*0.0725,
    backgroundColor: '#F4503E',
    height:'33%',
    width:'10%',
    overflow: "hidden",
    borderRadius: 5,
  },
  botonBuscar2:{
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow:{
    marginLeft: Dimensions.get('window').width*0.1,
    marginTop:'16%',
    position:'absolute',
  },
  resLogoImg:{
    width: Dimensions.get('window').width*0.20,
    height: Dimensions.get('window').width*0.20,
    left: Dimensions.get('window').width*0.05,
  },
  resImg:{
    width: Dimensions.get('window').width*1,
    height: Dimensions.get('window').width*1,
    position: 'absolute',
    marginTop: -Dimensions.get('window').height * 0.275,
  },
  headerOutInfo:{
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.3,
    flexDirection: 'row',
    paddingTop: Dimensions.get('window').width*0.05,
  },
  headerOutInfoText:{
    marginLeft: Dimensions.get('window').width*0.07,
    marginTop: Dimensions.get('window').width*0.03,
  },
  headerOutInfoText1:{
    color: 'white',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  headerOutInfoText2:{
    color: 'white',
    fontSize: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  headerIn:{
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.3,
    paddingTop: Dimensions.get('window').width*0.05,
    marginBottom: 5,
    borderRadius: 35,
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,   
  },
  resIconInfo:{
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width*0.05,
    marginBottom: Dimensions.get('window').width*0.02,
    alignContent: 'center',
  },
  resInfoText:{
    fontSize: 10,
    position: 'absolute',
    marginTop: Dimensions.get('window').width*0.009,
    marginLeft: Dimensions.get('window').width*0.1,
  },
  iconHeart:{
    position: 'absolute',
    marginLeft: Dimensions.get('window').width*0.625,
    marginTop: Dimensions.get('window').width*0.025,
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  iconShare:{
    position: 'absolute',
    marginLeft: Dimensions.get('window').width*0.75,
    marginTop: Dimensions.get('window').width*0.025,
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonsDeliveryMethod:{
    marginTop: Dimensions.get('window').width*0.025,
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  deliveryOn:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: '#322826',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  deliveryOff:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryTextOn:{
    fontSize: 12.5,
    color: 'white',
  },
  deliveryTextOff:{
    fontSize: 12.5,
    color: 'gray',
  },
  buttonAdicional:{
    marginTop: Dimensions.get('window').width*0.05,
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').width*0.08,
    backgroundColor: 'white',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems:'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textAdicional1:{
    fontSize: 8,
    color: '#322826',
  },
  textAdicional2:{
    fontSize: 8,
    color: '#2AA761',
  },
  buttonCarritoPre:{
    position: 'absolute',
    bottom: -Dimensions.get('window').height*0.88,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.15,
    borderRadius:20,
    marginLeft: Dimensions.get('window').width*0.05,
    marginBottom: Dimensions.get('window').height*0.025,
    overflow: 'hidden',
    justifyContent:'space-around',
    backgroundColor:'#2BD781',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonCarritoPost:{
    width: '100%',
    height: '100%',
    // backgroundColor:'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCarritoAcumulado: {
    width: '20%',
    // backgroundColor:'green',
    alignItems: 'center',
  },
  buttonCarritoAcumuladoBloque:{
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15  ,
    backgroundColor: '#126B41',
  },
  buttonCarritoText:{
    width:'60%',
    // backgroundColor:'magenta',
    alignItems: 'center',
  },
  buttonCarritoTextText:{
    color: 'white',
    fontSize: 15,
  },
  buttonCarritoAcumuladoCost:{
    width: '20%',
    // backgroundColor:'blue',
    alignItems: 'center',
  },
});


