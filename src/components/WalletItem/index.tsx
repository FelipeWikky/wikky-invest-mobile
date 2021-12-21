import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useState } from "react";

import { Wallet, WalletType } from "../../models/Wallet";
import WalletItemModal from "../WalletItemModal";

import styles from "./styles";

interface Props {
    wallet: Wallet;
    onSaveWallet?: (wallet: Wallet) => void;
}

const StockItem = ({ wallet, onSaveWallet }: Props) => {
    const [visibled, setVisibled] = useState(false);

    const getTypeFormatted = useCallback((type?: WalletType) => {
        switch (type) {
            case 'stock':
                return 'Ação';
            case 'fii':
                return 'FII';
        }
    }, []);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                setVisibled(true);
            }}
        >
            <WalletItemModal
                visible={visibled}
                onClose={() => setVisibled(false)}
                onSave={onSaveWallet}
                wallet={wallet}
            />
            <View style={styles.content}>
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
            </View>

            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => console.log("open modal plus")}
            >
                <MaterialIcons name="add" size={26} color="#FFF" />
            </TouchableOpacity>


        </TouchableOpacity>
    );
};

export default StockItem;