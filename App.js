import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);


import { NavigationContainer } from "@react-navigation/native";

// const ProductsStack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>      
    </Provider>
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

