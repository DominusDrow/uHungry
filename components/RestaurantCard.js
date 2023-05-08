import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image, ImageBackground} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const RestaurantCard = ({ navigation, productInfo }) =>{
    const redirect = () =>{
        navigation.navigate("ScreenRestaurant", {productInfo:productInfo});
    }
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity onPress={redirect}>
                    <View style={{height:'100%',width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Image source={{uri: productInfo.background}} style={styles.background}/>
                        <Image source={{uri: productInfo.image}} style={styles.image}/>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>{productInfo.name}</Text>
            <Text style={styles.text2}>{productInfo.deliveryTime}</Text>
        </View>
    )
}

export default RestaurantCard;

const styles= StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.340,
        height:Dimensions.get('window').height * 0.097,
        borderRadius:15,
        overflow:'hidden',
        alignContent:'center',
        borderWidth:1.5,
        borderColor:'white',
    },
    image: {
        width:'75%',
        height:'75%',
        resizeMode:'contain',
        position:'absolute',
    },
    background: {
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    text:{
        color: 'black',
        fontSize: 15,
        textAlign:'center',
        marginTop:10
    },
    text2:{
        color: 'black',
        fontSize: 12,
        textAlign:'center',
        marginTop:8,
    },
    container:{
        width: Dimensions.get('window').width * 0.350,
        height:Dimensions.get('window').height * 0.195,
        marginHorizontal:25,
        marginVertical:7.5,
        alignContent:'center',
        alignItems:'center'
    }
})
