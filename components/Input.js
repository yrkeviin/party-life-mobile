import { TextInput, View, StyleSheet } from 'react-native';

export default function Input({ placeholder, secureTextEntry}) {
    return (
        <View style={styles.input}>
            <TextInput 
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry} 
                style={styles.textInput} 
                placeholderTextColor="#FFF" 
            />
        </View>
    );
};
const styles = StyleSheet.create({
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