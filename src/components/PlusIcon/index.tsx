import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import styles from "./styles";

interface Props {
    onClick?: () => void;
    size?: number;
    iconColor?: string;
}
/**
 * use this component to render a plus icon standardized with background green and icon color white
 * @default size = 26, color = '#FFF'
 */
const PlusIcon = ({onClick, size, iconColor}: Props) => {
    return (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => onClick && onClick()}
        >
            <MaterialIcons name="add" size={size || 26} color={iconColor || "#FFF"} />
        </TouchableOpacity>
    )
};

export default PlusIcon;