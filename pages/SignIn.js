import react from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native-web";

export default function SignIn (){
    return(
        <View style={styles.container}>
            <div style={styles.main}>
                <Image source={require("./assets/logo1.png")} style={styles.img}/>
                <div>
                    <label>E-mail ou nome de usuário</label>
                    <TextInput style={styles.textInput} />
                    <label>Senha</label>
                    <TextInput style={styles.textInput} />
                    <TouchableOpacity style={styles.buttonEntrar}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <Text>Não possui uma conta</Text>
                    <a href="../SignUp">CRIE A SUA</a>
                    <Text>ou continue com :</Text>

                </div>
            </div>
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

    main :{
      display: 1,
      alignItems: "center",
      textAlign: "center",
      flexDirection: "collumn",
      color: "white"
    },

    img: {
      width: "30vh",
      height:"30vh"
    }
})