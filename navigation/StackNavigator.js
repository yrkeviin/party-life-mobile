import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/Signin";
import SignUp from "../screens/Signup";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}