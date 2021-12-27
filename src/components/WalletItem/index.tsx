import { Text, View, TouchableOpacity } from "react-native";
import { useCallback } from "react";

import { Wallet, WalletType } from "../../models/Wallet";
import TrashIcon from "../TrashIcon";

import styles from "./styles";
import Icon from "../Icon";

interface Props {
    wallet: Wallet;
    onSelectItem?: (wallet: Wallet) => void;
    onDeleteItem?: (wallet: Wallet) => Promise<void>;
}

const StockItem = ({ wallet, onSelectItem, onDeleteItem }: Props) => {

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
                <View style={styles.information}>
                    <Text style={styles.title}>Tipo</Text>
                    <Text style={styles.item}>{getTypeFormatted(wallet.type)}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => onSelectWalltetItem(wallet)}
                >
                    <Icon name="calculate" color="rgba(7, 55, 99, 1)" size={24}/>
                </TouchableOpacity>

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