import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Bat from './Bat';
import Cat from './Cat';
import MovieList from './component/MovieList';
import AddMovies from './component/AddMovie';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome 13'}}
        />
        <Stack.Screen name="Bat" component={Bat} />
        <Stack.Screen name="Cat" component={Cat} />
        <Stack.Screen name="ViewMovieList" component={MovieList} />
        <Stack.Screen name="UpdateMovieList" component={AddMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;