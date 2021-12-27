import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useCallback, useState } from "react";

import { Wallet, WalletType } from "../../models/Wallet";
import TrashIcon from "../TrashIcon";

import styles from "./styles";
import Icon from "../Icon";

interface Props {
    wallet: Wallet;
    onSelectItem?: (wallet: Wallet) => void;
    onDeleteItem?: (wallet: Wallet) => Promise<void>;
    onCalculateItem?: (wallet: Wallet) => void;
    isCalculate?: boolean;
    calculateCallback?: (total: string | number, totalOld: string | number) => void;
}

const StockItem = ({ wallet, onSelectItem, onDeleteItem, onCalculateItem, isCalculate, calculateCallback }: Props) => {

    const [dividend, setDividend] = useState('');
    const [total, setTotal] = useState(0);

    const getTypeFormatted = useCallback((type?: WalletType) => {
        switch (type) {
            case 'stock':
                return 'Ação';
            case 'fii':
                return 'FII';
        }
    }, []);

    const onSelectWalltetItem = useCallback((item: Wallet) => {
        if (onSelectItem) {
            onSelectItem(item)
        }
    }, [onSelectItem]);

    const onDeleteWalletItem = useCallback(async (item: Wallet) => {
        if (onDeleteItem) {
            await onDeleteItem(item);
        }
    }, [onDeleteItem]);

    const onCalculateDividendTotal = useCallback((value: string, old: String) => {
        console.log("old ", old);
        const qty = Number(wallet?.quantity);

        const dividendOld = Number(old);
        const totalOld = Number(qty) * dividendOld;
        console.log("totalOld ", totalOld)

        setDividend(value);
        const divid = Number(value);

        if (isNaN(qty) || isNaN(divid)) return;

        const calc = (qty * divid)
        setTotal(calc);
        if(calculateCallback) calculateCallback(calc, totalOld);
    }, [wallet, setDividend, setTotal]);

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.content} onPress={() => onSelectWalltetItem(wallet)}>
                <View style={styles.information}>
                    <Text style={styles.title}>Ticker</Text>
                    <Text style={styles.item}>{wallet.ticker}</Text>
                </View>
                <View style={styles.information}>
                    <Text style={styles.title}>Quantidade</Text>
                    <Text style={styles.item}>{wallet.quantity}</Text>
                </View>
                {/* <View style={styles.information}>
                    <Text style={styles.title}>Tipo</Text>
                    <Text style={styles.item}>{getTypeFormatted(wallet.type)}</Text>
                </View> */}
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                {isCalculate && (
                    <View style={styles.calculateContainer}>
                        <TextInput
                            style={styles.calculateInput}
                            placeholder="0.00"
                            value={dividend}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoCorrect={false}
                            spellCheck={false}
                            onChangeText={value => onCalculateDividendTotal(value, dividend)}
                        />
                        <Text style={styles.calculateTotal}>{total.toFixed(2)}</Text>
                    </View>
                )}

                {onCalculateItem && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => onCalculateItem(wallet)}
                    >
                        <Icon name="calculate" color="rgba(7, 55, 99, 1)" size={24} />
                    </TouchableOpacity>
                )}

                {onDeleteItem && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => onDeleteWalletItem(wallet)}
                    >
                        <TrashIcon size={22} />
                    </TouchableOpacity>
                )}
            </View>


        </View>
    );
};

export default StockItem;