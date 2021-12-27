import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { TouchableOpacity, View, StyleProp, TextStyle } from 'react-native';

import styles from './styles';

interface Props {
    name: keyof typeof ICON_NAMES;
    color: string;

    onClick?: () => void;
    size?: number;
    background?: 'none' | string;
    style?: StyleProp<TextStyle>;
}

const ICON_NAMES = {
    'add': 'MaterialIcons',
    'trash': 'FontAwesome',
    'block': 'MaterialIcons',
    'calculate': 'MaterialIcons'
}
/**
 * use this component to render a icon standardized
 * @default size = 26, background = '#FFF'
 */
const Icon = (props: Props) => {
    const { name, onClick, size = 26, color, background = '#FFF', style } = props;

    const renderIconByName = useCallback(() => {
        switch (name) {
            case 'add':
                return <MaterialIcons style={style} name="add" size={size} color={color} />;
            case 'trash':
                return <FontAwesome style={style} name="trash-o" size={size} color={color} />;
            case 'block':
                return <MaterialIcons style={style} name="block" size={size} color={color} />;
            case 'calculate':
                return <MaterialIcons style={style} name="calculate" size={size} color={color} />;
        }
    }, [props]);

    if (onClick) {
        return (
            <TouchableOpacity
                style={[styles.container, (background && background !== 'none') ? { backgroundColor: background } : {}]}
                onPress={() => onClick && onClick()}
            >
                {renderIconByName()}
            </TouchableOpacity>
        )
    };
    return (
        <View
            style={[styles.container, (background && background !== 'none') ? { backgroundColor: background } : {}]}
        >
            {renderIconByName()}
        </View>
    )
};

export default Icon;