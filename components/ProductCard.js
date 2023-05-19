import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from "react-native";
import { Divider, Icon } from "@rneui/themed";

const ProductCard = ({ navigation, productInfo }) =>{

    const redirect = () => {
        navigation.navigate('ScreenProduct', { productInfo: productInfo });
    }

    return(
        <>
            <TouchableOpacity style={styles.platillo} onPress={redirect}>
                <View style={styles.platilloView}>
                    <Text style={styles.platilloTitle}>{productInfo.name}</Text>
                    <View style={styles.platilloInfo}>
                        <Text style={styles.platilloDescription}>{productInfo.description}</Text>
                        <Text style={styles.platilloCost}>${productInfo.cost}</Text>
                    </View>
                </View>
                <Image source={{uri: productInfo.image}} style={styles.platilloImage}/>

            </TouchableOpacity>
                <Divider
                    orientation="horizontal"
                    style={styles.divider}
                />
        </>
    );
}


export default ProductCard;

const styles= StyleSheet.create({
    platillo:{
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.45,
        height:Dimensions.get('window').height * 0.25,
        marginLeft: Dimensions.get('window').width*0.05,
    },
    platilloImage: {
        width: Dimensions.get('window').width*0.55,
        height: Dimensions.get('window').width*0.3,
        marginTop: 15,
        right: 0,
        borderRadius: 15,
        resizeMode:'cover',
        borderWidth: 1,
        borderColor: "#F0F0F0"

    },
    platilloView:{
        width: Dimensions.get('window').width*0.35,
        height: "100%",
        paddingTop: 15,
        // backgroundColor:'red',
    },
    platilloTitle:{
        color:'black',
        fontSize: 15,
    },
    platilloInfo:{
        // backgroundColor: 'blue',
    },
    platilloDescription:{
        fontSize: 10,
        color: '#AAA',
    },
    platilloCost:{
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
    },
    divider:{
        width: Dimensions.get('window').width*0.9,
        marginLeft: Dimensions.get('window').width*0.05,
        backgroundColor: '#F0F0F0',
    }

})
