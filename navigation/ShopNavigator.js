import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"
import Colors from "../constants/Colors";
import { Platform }  from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';

const ProductsStack = createStackNavigator();

const ProductsStackScreen = () => (
   
    <ProductsStack.Navigator
        initialRouteName="ProductOverview" 
        screenOptions={{
            headerTintColor: Platform.OS === "android" ? 'white' : Colors.primary,
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primary : ""
            }
        }}
    >
        <ProductsStack.Screen 
            name="ProductOverview"
            component={ProductsOverviewScreen}
            options={{title: "All Products"}}
        />
    </ProductsStack.Navigator>

);

export default ProductsStackScreen;