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
import LoginAdmin from './src/admin/LoginAdmin';
import { useEffect } from 'react';
import PostData from './src/admin/PostData';
import DashBoard from './src/admin/DashBoard';
import ViewPost from './src/admin/ViewPost';
import UpdatePost from './src/admin/UpdatePost';
import DeletePost from './src/admin/DeletePost';
import RegisterAdmin from './src/admin/RegisterAdmin';
import Toast from 'react-native-toast-message';





const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginAdmin"
          component={LoginAdmin}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="RegisterAdmin"
          component={RegisterAdmin}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="PostData"
          component={PostData}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="ViewPost"
          component={ViewPost}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="DeletePost"
          component={DeletePost}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="UpdatePost"
          component={UpdatePost}
          options={{ animation: 'slide_from_bottom' }}
        />
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
