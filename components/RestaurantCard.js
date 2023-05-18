import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Divider } from '@rneui/themed';

const RestaurantCard = ({ navigation, productInfo }) => {
    const redirect = () => {
        navigation.navigate('ScreenRestaurant', { productInfo: productInfo });
    };

    return (
        <>
        <Divider />
        <TouchableOpacity onPress={redirect} style={styles.card}>
            <Image source={{ uri: productInfo.background }} style={styles.image} />
            <View style={{flexDirection: 'row' }}>
                <Image source={{ uri: productInfo.image }} style={styles.logo} />
                <Text style={styles.text}>{productInfo.name}</Text>
            </View>
        </TouchableOpacity>
        </>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width,
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.3,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 50,
        marginLeft: 10,
    },
});

