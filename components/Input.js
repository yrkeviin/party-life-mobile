import { TextInput, View, StyleSheet } from 'react-native';

export default function Input({ placeholder, secureTextEntry}) {
    return (
        <View>
            <label style={styles.placeholder}>
                {placeholder}
            </label>
            <View style={styles.input}>
            <TextInput 
                secureTextEntry={secureTextEntry} 
                style={styles.textInput} 
                InputTextColor="#FFF" 
                
            />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    placeholder: {
        marginLeft: "1rem", 
        color: "#EEB230"
    },
    textInput: {
        color: "#EEB230", 
        width: "100%",
        height: "100%"
    },
    input: {
        width: 300,
        backgroundColor: '#15002E',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderColor: '#EEB230',
        borderWidth: 2,
    },

});