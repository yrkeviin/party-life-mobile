import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Logo from "../components/Logo.js";

export default function LogIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            <Button text={"Entrar"} onPress={() => navigation.navigate("SignIn")} />
            <Button text={"Inscreva-se"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15002E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 10,
    },
});