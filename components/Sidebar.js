import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Sidebar = ({navigation}) => {
  return (
    <View style={styles.sidebar}>
      <Text>menu</Text>
      <View>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate('Gst')}>GSTCalculator</Text>
          <Text onPress={() => navigation.navigate('todolist')}>Todolist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: 'lightblue',
    paddingTop: 20,
    paddingHorizontal: 20,
     fontSize:30,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 6,
    fontWeight: 'bold',
    color: 'black',
  },
  sidebarContent: {
    fontSize: 30,
    marginTop: 20,
  },
});


export default Sidebar;