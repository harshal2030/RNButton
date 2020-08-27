import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 2,
          height: 150,
          width: 150,
          borderRadius: 75,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>ROund Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          height: 80,
          marginTop: 10,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>REctangle Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
