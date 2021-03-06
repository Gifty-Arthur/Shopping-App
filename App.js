import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors.js';
import SignInScreen from './src/view/screens/SignInScreen';
import Login from './src/view/screens/Login';
import SignUpScreen from './src/view/screens/SignUpScreen';







const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator>
      {/* screenOptions={{header: () => null}} */}
        {/* <Stack.Screen name= "signUp" component={signUp}/> */}
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name= "SignInScreen" component={SignInScreen}/>
        <Stack.Screen name= "SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsSceeen} />
        
        
        
        
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
