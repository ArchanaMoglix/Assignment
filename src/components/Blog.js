import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Blog = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        padding: 40,
      }}>
      <View style={{position: 'absolute', top: 10, left: 10}}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome5 name={'bars'} size={30} color={'black'}></FontAwesome5>
        </TouchableOpacity>
      </View>
      <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 40}}>
        Welcome to my Blog!
      </Text>
    </View>
  );
};
export default Blog;
