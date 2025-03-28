import { TouchableOpacity, Image, StyleSheet} from "react-native";

export default function SocialLoginButtons({ source }) {
    return (
        <TouchableOpacity >
            <Image 
                source={source} 
                style={styles.styleSocialButton}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    styleSocialButton: {
        width: 40,
        height: 40,
        marginLeft: 10,
        tintColor: '#EEB230',
    },
});