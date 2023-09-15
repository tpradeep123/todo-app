import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginPage from "../Screen/LoginPage";
import SignUp from "../Screen/SignUp";
import TodoScreen from "../Screen/TodoScreen";
import LandingPage from "../Screen/LandingPage";
const Stack=createStackNavigator()
export default function AppNavigator(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='TodoApp' component={LandingPage}/>
          <Stack.Screen name='LoginPage' component={LoginPage}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='TodoScreen' component={TodoScreen}/>
        </Stack.Navigator>
     </NavigationContainer>
    )
}