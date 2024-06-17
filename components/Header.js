
  import React from 'react';
  import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    data,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/EvilIcons';
  const Header = ({navigation}) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sidebar')}
          style={styles.menuButton}>
          <Icon name="navicon" size={40} color='white' />
        </TouchableOpacity>
        <Text style={styles.textarea}>ReactApp</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 60,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textarea: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    icon: {
      fontSize: 25,
      color: 'white',
    },
    menuButton: {
      position: 'absolute',
      left: 10,
      padding: 10,
    },
  });
  
  
  export default Header;