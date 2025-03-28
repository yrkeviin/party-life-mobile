import { Image, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <Image             
            source={require("../assets/logo2.png")} 
            style={styles.logo}
        />
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 200, 
        height: 200, 
    },
});