import { View } from "react-native";
import Button from "../components/Button";


export default function LogIn({navigation}) {
    return (
        <View>
            <Button text={"Entrar"} onPress={()=> navigation.navigate("SignIn")} />
            <Button text={"Inscreva-se"}/>
        </View>
    );
};