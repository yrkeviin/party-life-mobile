import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({ onPress, text}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EEB230',
        padding: 10,
        marginTop: 20,
        width: 300,
        display: "flex",
        alignItems: "center",
        borderRadius: 50,
    },
    textButton: {
        color: '#15002E',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});