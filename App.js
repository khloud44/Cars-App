// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './.expo/sources/screens/Splash';
import Home from './.expo/sources/screens/Home';
import Google from '../Lab.2/.expo/sources/screens/Google'
import WhatsApp from '../Lab.2/.expo/sources/screens/Whatsapp'
import Card from '../Lab.2/.expo/sources/screens/Card'
import About from '../Lab.2/.expo/sources/screens/About'
import CardDetails from '../Lab.2/.expo/sources/screens/CardDetails'
import Footer from '../Lab.2/.expo/sources/screens/Footer'
import Header from '../Lab.2/.expo/sources/screens/Header'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Whatsapp" component={WhatsApp} />
        <Stack.Screen name="Card" component={Card}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="CardDetails" component={CardDetails}/>
        <Stack.Screen name="Footer" component={Footer}/>
        <Stack.Screen name="Header" component={Header}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;