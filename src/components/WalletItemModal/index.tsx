import { useCallback, useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Wallet, getTypeFormatted } from "../../models/Wallet";

import NumericInput from "../NumericInput";

import styles from "./styles";

interface Props {
    visible: boolean;
    onClose: () => void;
    wallet?: Wallet;
    onSave?: (wallet: Wallet) => void;
}

const WalletItemModal = (props: Props) => {
    const { visible, onClose, wallet, onSave } = props;

    const [state, setState] = useState<Wallet | undefined>({} as Wallet);
    useEffect(() => {
        if (wallet) {
            setState(wallet);
        }
    }, [wallet]);

    const onBackPress = useCallback(() => {
        setState(undefined);
        onClose();
    }, []);
    const onSavePress = useCallback(() => {
        if (state && onSave) {
            onSave(state);
            onClose();
            setState({} as Wallet);
        }
    }, [onSave, state, onClose]);

    return (
        <Modal
            visible={visible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType="slide"
        >
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modal}>
                        <View style={styles.card}>

                            <View style={styles.header}>
                                <TextInput
                                    value={state?.ticker || wallet?.ticker || ''}
                                    onChangeText={value => setState(prev => ({ ...prev, ticker: value }))}
                                    style={{ borderBottomWidth: 0.5, borderBottomColor: "#CCC", width: '50%', textAlign: 'center' }}
                                    placeholder="Ticker do ativo"
                                />
                            </View>

                            <View style={styles.content}>
                                <View style={styles.information}>
                                    <Text>Tipo: &nbsp;</Text>
                                    <Text>{getTypeFormatted(wallet?.type)}</Text>
                                </View>

                                <View style={styles.information}>
                                    <Text>Quantidade: &nbsp;</Text>
                                    <NumericInput
                                        value={state?.quantity ? String(state.quantity) : wallet?.quantity ? String(wallet.quantity) : ''}
                                        editable={!!(onSave)}
                                        onChangeText={value => setState(prev => ({ ...prev, quantity: Number(value) }))}
                                        onDecrease={newValue => setState(prev => ({ ...prev, quantity: Number(newValue) }))}
                                        onIncrease={newValue => setState(prev => ({ ...prev, quantity: Number(newValue) }))}
                                    />
                                </View>
                            </View>

                            <View style={styles.buttonsContainer}>

                                <TouchableOpacity style={styles.button} onPress={onBackPress}>
                                    <Text>Voltar</Text>
                                </TouchableOpacity>

                                {onSave && (
                                    <View style={styles.separator} />
                                )}

                                {onSave && (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={onSavePress}
                                    >
                                        <Text>Salvar</Text>
                                    </TouchableOpacity>
                                )}

                            </View>

                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Modal >
    );
};

export default WalletItemModal;