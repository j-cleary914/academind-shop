import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';

import Colors from '../constants/Colors';
import { Platform, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeaderCartButton from '../components/UI/HeaderCartButton';
import HeaderDrawerToggle from '../components/UI/HeaderDrawerToggle';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const defaultNavOptions = {
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
};

const ProductsStack = createStackNavigator();
const OrdersStack = createStackNavigator();

const OrdersStackScreen = () => (
  <OrdersStack.Navigator
    initialRouteName="OrdersScreen"
    screenOptions={defaultNavOptions}
  >
    <OrdersStack.Screen
      name="OrdersScreen"
      component={OrdersScreen}
      options={{
        title: 'Your Orders',
        headerLeft: () => <HeaderDrawerToggle />,
      }}
    />
  </OrdersStack.Navigator>
);

const ProductsStackScreen = () => (
  <ProductsStack.Navigator
    initialRouteName="ProductOverview"
    screenOptions={defaultNavOptions}
  >
    <ProductsStack.Screen
      name="ProductOverview"
      component={ProductsOverviewScreen}
      options={{
        title: 'All Products',
        headerRight: () => <HeaderCartButton />,
        headerLeft: () => <HeaderDrawerToggle />,
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
const Drawer = createDrawerNavigator();

const ShopNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Products"
    drawerContentOptions={{
      activeTintColor: Colors.primary,
    }}
  >
    <Drawer.Screen
      name="Products"
      component={ProductsStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <FontAwesomeIcon
            icon={['fal', 'shopping-cart']}
            style={[
              focused ? styles.drawerActive : styles.drawerInActive,
              { height: size, width: size },
            ]}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Orders"
      component={OrdersStackScreen}
      options={{
        drawerIcon: ({ focused, size }) => (
          <FontAwesomeIcon
            icon={['fas', 'stream']}
            style={[
              focused ? styles.drawerActive : styles.drawerInActive,
              { height: size, width: size },
            ]}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  drawerActive: {
    color: Colors.primary,
  },
  drawerInActive: {
    color: 'grey',
  },
});

export default ShopNavigator;
