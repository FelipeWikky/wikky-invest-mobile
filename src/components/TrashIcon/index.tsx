import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import styles from "./styles";

interface Props {
    onClick?: () => void;
    size?: number;
    iconColor?: string;
}
/**
 * use this component to render a trash icon standardized with  icon color red
 * @default size = 26, color = '#e00000'
 */
const TrashIcon = ({ onClick, size, iconColor }: Props) => {
    if (onClick) {
        return (
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => onClick && onClick()}
            >
                <FontAwesome name="trash-o" size={size || 26} color={iconColor || "#e00000"} />
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.iconContainer} >
            <FontAwesome name="trash-o" size={size || 26} color={iconColor || "#e00000"} />
        </View>
    );

};

export default TrashIcon;