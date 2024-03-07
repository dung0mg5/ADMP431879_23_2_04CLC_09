import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen"
import SavedScreen from "./screens/SavedScreen"
import BookingScreen from "./screens/BookingScreen"
import ProfileScreen from "./screens/ProfileScreen"

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';


const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="search1" size={24} color="#2D6ADC" />
                        ) : (
                            <AntDesign name="search1" size={24} color="#AAA" />
                        )
                    }} />
                <Tab.Screen
                    name="Saved"
                    component={SavedScreen}
                    options={{
                        tabBarLabel: "Saved", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="hearto" size={24} color="#2D6ADC" />
                        ) : (
                            <AntDesign name="hearto" size={24} color="#AAA" />
                        )
                    }} />
                <Tab.Screen
                    name="Bookings"
                    component={BookingScreen}
                    options={{
                        tabBarLabel: "Bookings", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Feather name="briefcase" size={24} color="#2D6ADC" />
                        ) : (
                            <Feather name="briefcase" size={24} color="#AAA" />
                        )
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="person-circle-sharp" size={24} color="#2D6ADC" />
                        ) : (
                            <Ionicons name="person-circle-outline" size={24} color="#AAA" />
                        )
                    }} />
            </Tab.Navigator>
        )

    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false, headerTitleAlign: 'center' }} />
                <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Places" component={PlacesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Info" component={PropertyInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})