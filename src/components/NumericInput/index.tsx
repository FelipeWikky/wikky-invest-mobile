import { View, TouchableOpacity, TextInput, Text, TextInputProps } from "react-native";

import styles from "./styles";

interface Props extends TextInputProps {
    onIncrease: (value: string) => void;
    onDecrease: (value: string) => void;
}

const NumericInput = ({ value, onIncrease, onDecrease, ...props }: Props) => {
    const { editable } = props;

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={[styles.qtyButton, styles.qtyLow]}
                onPress={() => onDecrease(String(Number(value) - 1))}
                disabled={!(editable)}
            >
                <Text style={styles.qtyText}>
                    -
                </Text>
            </TouchableOpacity>
            <TextInput
                {...props}
                keyboardType="numeric"
                style={styles.inputQty}
                value={value || '0'}
            />
            <TouchableOpacity
                style={[styles.qtyButton, styles.qtyPlus]}
                onPress={() => onIncrease(String(Number(value) + 1))}
                disabled={!(editable)}
            >
                <Text style={styles.qtyText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NumericInput;