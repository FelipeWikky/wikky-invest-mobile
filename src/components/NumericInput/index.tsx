import { View, TouchableOpacity, TextInput, Text, TextInputProps } from "react-native";
import {ForwardRefRenderFunction, forwardRef} from "react";

import styles from "./styles";

interface Props extends TextInputProps {
    onIncrease: (value: string) => void;
    onDecrease: (value: string) => void;
    steps?: number;
    innerRef?: any;
}

const NumericInput: ForwardRefRenderFunction<TextInput, Props> = ({ value, onIncrease, onDecrease, steps = 1,innerRef, ...props }, ref) => {
    const { editable } = props;

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={[styles.qtyButton, styles.qtyLow]}
                onPress={() => onDecrease(String(Number(value) - steps))}
                disabled={!(editable)}
            >
                <Text style={styles.qtyText}>
                    -
                </Text>
            </TouchableOpacity>
            <TextInput
                {...props}
                ref={ref}
                keyboardType="numeric"
                style={styles.inputQty}
                value={value ?? ''}
            />
            <TouchableOpacity
                style={[styles.qtyButton, styles.qtyPlus]}
                onPress={() => onIncrease(String(Number(value) + steps))}
                disabled={!(editable)}
            >
                <Text style={styles.qtyText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default forwardRef(NumericInput);