import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from "react-navigation"
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

import LoginScreen from "./Screens/LoginScreen"
import LoadingScreen from "./Screens/LoadingScreen"
import DashboardScreen from "./Screens/DashboardScreen"

import * as firebase from "firebase";
import {firebaseConfig} from "./config";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseCongig);

}
else{
  firebase.app()
}


constAppSwitchNavigator=createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

constAppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    <AppNavigator/>
  );
}
