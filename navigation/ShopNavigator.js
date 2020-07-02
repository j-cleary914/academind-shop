import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CustomHeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const ProductsStack = createStackNavigator();

const ProductsStackScreen = (props) => (
  <ProductsStack.Navigator
    initialRouteName="ProductOverview"
    screenOptions={{
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
    }}
  >
    <ProductsStack.Screen
      name="ProductOverview"
      component={ProductsOverviewScreen}
      options={{
        title: 'All Products',
        headerRight: () => <CustomHeaderButton oldProps={props} />,
      }}
    />
    <ProductsStack.Screen
      name="ProductDetailsScreen"
      component={ProductDetailsScreen}
      options={({ route }) => ({
        title: `${route.params.productTitle}`,
      })}
    />
    <ProductsStack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        title: 'Your Cart',
      }}
    />
  </ProductsStack.Navigator>
);

export default ProductsStackScreen;
