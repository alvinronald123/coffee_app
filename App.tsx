import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import TabNavigator from './src/navigator/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
