import React from 'react';
import { DrawerProgressContext, createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";
import Profile from "../Screens/Profile";

const Tab = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </DrawerNavigator>
    );
}

export default DrawerNavigator;