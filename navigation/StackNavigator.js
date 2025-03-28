import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image, StatusBar } from "react-native";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator initialRouteName="LogIn">
            <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={({ navigation }) => ({
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image 
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271218.png'}} 
                                style={{ width: 24, height: 24, marginLeft: 10, tintColor: '#EEB230'}}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: '', 
                    headerStyle: {
                        backgroundColor: '#15002E',
                        borderBottomWidth: 0,
                        elevation: 0, 
                        shadowOpacity: 0, 
                    },
                })}
            />
        </Stack.Navigator>
        </>
    );
}