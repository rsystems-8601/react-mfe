import * as React from 'react';
import { Button, View } from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
<View>
    <Button
      title="Go to Cat's profile"
      onPress={() =>
        navigation.navigate('Cat', {name: 'Jane'})
      }
    />
    <Button
      title="Go to Bat's profile"
      onPress={() =>
        navigation.navigate('Bat', {name: 'Jane'})
      }
    />
    <Button
      title="Go to Movies List"
      onPress={() =>
        navigation.navigate('ViewMovieList', {name: 'Jane'})
      }
    />
    <Button
      title="Go to Update Movies"
      onPress={() =>
        navigation.navigate('UpdateMovieList', {name: 'Jane'})
      }
    />
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default HomeScreen;