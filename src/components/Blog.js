import React from 'react';
import {Text, View} from 'react-native';

const Blog = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        padding: 20,
      }}>
      <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 40}}>
        Welcome to my Blog!
      </Text>
    </View>
  );
};
export default Blog;
