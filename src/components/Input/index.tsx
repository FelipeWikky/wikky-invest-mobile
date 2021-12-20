import { Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";

import styles from "./styles";

type Props = Omit<TextInputProps, 'onChangeText'> & {
    containerStyle?: ViewStyle;
    inputContainerStyle?: ViewStyle;
    label?: string;
    error?: string;
    innerRef?: any;
    onChangeText?: (text: string, name?: string) => void;
};

const Input = ({ label, error, containerStyle, inputContainerStyle, innerRef, style, ...props }: Props) => {


    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={styles.label}>
                    {label}
                </Text>
            )}

            <View style={[styles.inputContainer, inputContainerStyle]}>
                <TextInput
                    {...props}
                    autoCorrect={props.autoCorrect || false}
                    autoCompleteType={props.autoCompleteType || 'off'}
                    ref={innerRef}
                    style={[styles.input, style]}
                />
            </View>

            {error && (
                <Text style={styles.error}>
                    {error}
                </Text>
            )}
        </View>
    );
};

export default Input;