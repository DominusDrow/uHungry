import { StyleSheet, View, Text } from 'react-native';
import { Header, Icon, Avatar } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
  return (
    <View >
     <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>

            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => { console.log('search') }}
            >
              <Icon type="entypo" name="shopping-cart" color="white" />
            </TouchableOpacity>
          </View>
      }
       centerComponent={
         <View style={styles.headerContainer}>
          <Avatar
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Text style={styles.subheaderText}>Hello, John</Text>
        </View>
      }
    />     



    </View>
  );
}

const styles = StyleSheet.create({
headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  //backgroundColor: '#397af8',
  width: '100%',
  paddingVertical: 2,
  flexDirection: 'row',
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  
},
});

