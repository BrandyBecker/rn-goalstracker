import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
    {/* Main App View */}
      <View style={{flexDirection: 'row'}}>
       {/* Text Input View */}
        <TextInput placeholder="What is your goal ?" style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
       {/* Button View */}
       <Button title="Add"/>
      </View>
      <View>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
