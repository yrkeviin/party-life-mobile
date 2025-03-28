
import { View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";
import SocialLoginButtons from "../components/SocialLoginButtons";



export default function SignIn (){
    return(
        <View style={styles.container}>
            <Logo />
            <View className={styles.form}>
                <Input placeholder="Email" />
                <Input placeholder="Senha" secureTextEntry={true} />
            </View>
            <Button text="Entrar" />
            <Text style={styles.text}>Não possui uma conta?</Text>
            <TouchableOpacity>
                <Text style={styles.link}>CRIE A SUA</Text>
            </TouchableOpacity>
            <Text style={styles.text}>ou continue com:</Text>
            <View style={styles.socialIcons}>
                <SocialLoginButtons source={{ uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' }} /> 
                <SocialLoginButtons source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' }} /> 
                <SocialLoginButtons source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }} /> 
                <SocialLoginButtons source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "#15002E"
    },
    form: {
        marginBottom: 20,
    },
    text: {
        color: "#FFF",
        marginTop: 10,
        fontSize: 14,
    },
    link: {
        color: "#EEB230",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,
        textDecorationLine: "underline",
    },
    socialIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "60%",
    },
})