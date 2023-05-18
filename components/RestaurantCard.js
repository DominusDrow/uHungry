import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Divider, Icon } from '@rneui/themed';


const RestaurantCard = ({ navigation, productInfo }) => {
    const redirect = () => {
        navigation.navigate('ScreenRestaurant', { productInfo: productInfo });
    };

    return (
        <>
            <TouchableOpacity onPress={redirect} style={styles.card}>
                <Image source={{ uri: productInfo.background }} style={styles.image} />
                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                    <View style={{flexDirection: 'row' }}>
                        <Image source={{ uri: productInfo.image }} style={styles.logo} />

                        <View style={{flexDirection: 'column', marginLeft: 10}}>
                            <Text style={styles.text}>{productInfo.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon type="material" name="timer" size={15} color="gray" style={{marginTop: 5}} />
                                <Text style={styles.subText}>{productInfo.deliveryFee} min</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: Dimensions.get('window').width * 0.5}}>
                            <Icon type="material" name="star" size={15} color="#FFD700" style={{marginTop: 5}} />
                            <Text style={styles.subText}>{productInfo.rating}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
            <Divider
                orientation="horizontal"
                style={styles.divider}
            />
        </>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginBottom: 10,
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
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    subText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5,
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 50,
        marginTop: 5,
        marginRight: 5,
    },
    divider: {
        width: Dimensions.get('window').width * 0.9,
        marginTop: -5,
        marginBottom: 10,
        marginLeft: Dimensions.get('window').width * 0.05,
    },
});

