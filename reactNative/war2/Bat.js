import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Image } from 'react-native';

const Bat = () => {
  const [ftext, setFtext] = useState('');
  const getFullName = (
    firstName,
    secondName,
    thirdName,
  ) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
  };

  return (
    <View style={styles.container}>
      <Text>Jai</Text>
      <Text>Sri Ram</Text>
      <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
      <Image source={require('./img/photo.jpg')} style={{width: 40, height: 40}} />
      <TextInput
        style={{height: 40,borderWidth:"1px", borderBlockColor:"red"}}
        placeholder="Type here to translate!"
        onChangeText={newText => setFtext(newText)}
        defaultValue={ftext}
      />
      <Text style={{padding: 10, fontSize: 42 }}>
        {ftext
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Bat;
