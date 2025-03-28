
import { View, StyleSheet} from "react-native";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";



export default function SignIn (){
    return(
        <View style={styles.container}>
            <Logo />
            <View className={styles.form}>
                <Input placeholder="Email" />
                <Input placeholder="Senha" secureTextEntry={true} />
            </View>
            <Button text="Entrar" />
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
})