import { useCallback, useEffect, useState, useRef, ForwardRefRenderFunction, forwardRef, useImperativeHandle } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Wallet } from "../../models/Wallet";
import Icon from "../Icon";

import NumericInput from "../NumericInput";

import styles from "./styles";

export interface CalculateStockModalHandles {
    selectWallet: (wallet: Wallet) => void;
}

const CalculateStockModal: ForwardRefRenderFunction<CalculateStockModalHandles> = (_, ref) => {
    const [wallet, setWallet] = useState<Wallet>({} as Wallet);

    const [modalVisible, setModalVisible] = useState(false);

    const selectWallet = useCallback((item: Wallet) => {
        setWallet(item);
        setModalVisible(true);
    }, [setWallet, setModalVisible]);

    useImperativeHandle(ref, () => {
        return {
            selectWallet
        }
    });

    const [state, setState] = useState<Wallet | undefined>({} as Wallet);
    const [dividend, setDividend] = useState('0');
    const [total, setTotal] = useState(0);

    const qtyRef = useRef<TextInput>(null);
    const dividendRef = useRef<TextInput>(null);

    useEffect(() => {
        if (wallet) {
            setState(wallet);
        }
    }, [wallet]);

    const onBackPress = useCallback(() => {
        setTotal(0);
        setDividend('0');
        setState(undefined);
        setModalVisible(false);
    }, []);

    const onBlurInputs = useCallback(() => {
        qtyRef?.current?.blur();
        dividendRef?.current?.blur();
    }, []);
    const onCalculatePress = useCallback(() => {
        onBlurInputs();

        const qty = Number(state?.quantity);
        const divid = Number(dividend);

        if (isNaN(qty) || isNaN(divid)) return;
        setTotal(qty * divid);
    }, [wallet, state, dividend, setTotal]);

    const renderHeader = useCallback(() => (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Icon name="calculate" size={20} color="rgba(7, 55, 99, 1)" />
                <Text style={styles.title}>C á l c u l o</Text>
                <Icon name="calculate" size={20} color="rgba(7, 55, 99, 1)" />
            </View>
            <Text style={styles.subTitle}>{wallet?.ticker}</Text>
        </View>
    ), [wallet]);

    const renderFooter = useCallback(() => (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={onBackPress}>
                <View style={styles.buttonText}>
                    <Text style={styles.text}>Voltar</Text>
                </View>
            </TouchableOpacity>
        </View>
    ), [onBackPress]);

    const renderTextCalculated = useCallback((value: string | number) => {
        if (value) {
            return `Valor a receber: ${Number(value).toFixed(2)}`;
        }
        return '';
    }, []);

    return (
        <Modal
            visible={modalVisible}
            onRequestClose={() => onBackPress()}
            transparent={true}
            animationType="slide"
        >
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={onBackPress}>
                        <View style={styles.modal}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={styles.card}>
                                    {renderHeader()}

                                    <View style={styles.content}>
                                        <View style={styles.inputContainer}>
                                            <View style={styles.information}>
                                                <Text style={styles.label}>Quantidade: </Text>
                                                <NumericInput
                                                    value={state?.quantity ? String(state.quantity) : wallet?.quantity ? String(wallet.quantity) : ''}
                                                    onChangeText={value => setState(prev => ({ ...prev, quantity: Number(value) }))}
                                                    onDecrease={newValue => setState(prev => ({ ...prev, quantity: Number(newValue) }))}
                                                    onIncrease={newValue => setState(prev => ({ ...prev, quantity: Number(newValue) }))}
                                                    editable={true}
                                                    innerRef={qtyRef}
                                                    ref={qtyRef}
                                                />
                                            </View>
                                            <View style={styles.information}>
                                                <Text style={styles.label}>Dividend: </Text>
                                                <NumericInput
                                                    value={String(dividend) || ''}
                                                    steps={0.1}
                                                    editable={true}
                                                    onChangeText={value => setDividend(String(value))}
                                                    onDecrease={newValue => setDividend(String(Number(newValue).toFixed(2)))}
                                                    onIncrease={newValue => setDividend(String(Number(newValue).toFixed(2)))}
                                                    innerRef={dividendRef}
                                                    ref={dividendRef}
                                                />
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.calculateContainer}
                                            onPress={onCalculatePress}
                                        >
                                            <Text style={styles.calculateButtonText}>Calcular</Text>
                                        </TouchableOpacity>

                                        <Text style={styles.calculateText}>
                                            {renderTextCalculated(total)}
                                        </Text>
                                    </View>

                                    {renderFooter()}
                                </View>

                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Modal >
    );
};

export default forwardRef(CalculateStockModal);