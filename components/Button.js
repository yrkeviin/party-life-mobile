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
        padding: 20,
        borderRadius: 5,
    },
    textButton: {
        color: '#15002E',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});