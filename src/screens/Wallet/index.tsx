import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { useCallback, useState, useContext, useEffect } from "react";

import styles from "./styles";

import useWallet from "../../hooks/useWallet";
import { Wallet } from "../../models/Wallet";
import WalletItem from "../../components/WalletItem";
import WalletItemModal from "../../components/WalletItemModal";
import PlusIcon from "../../components/PlusIcon";
import WalletContext from "../../contexts/WalletContext";

const WalletComponent = () => {

    const { wallets, saveWalletItem, deleteWalletItem, getWallets, loadingWallets } = useWallet();
    const [selected, setSelected] = useState<Wallet>();
    const [isModalVisibled, setIsModalVisibled] = useState(false);

    const onSaveWalletItem = useCallback(async (wallet: Wallet) => {
        await saveWalletItem(wallet);
        setSelected(undefined);
    }, []);

    const onDeleteWalletItem = useCallback(async (wallet: Wallet) => {
        await deleteWalletItem(wallet);
        setSelected(undefined);
    }, []);

    const onSelectWalletItem = useCallback(async (wallet: Wallet) => {
        setSelected(wallet);
        setIsModalVisibled(true);
    }, []);

    const renderLoading = useCallback(() => {
        if (loadingWallets) {
            <ActivityIndicator
                size={"large"} color={"rgba(7, 55, 99, 1)"}
                style={{ height: 42 }}
            />
        };
        return null;
    }, [loadingWallets]);

    return (
        <View style={styles.container}>
            <WalletItemModal visible={isModalVisibled} onClose={() => setIsModalVisibled(false)} onSave={onSaveWalletItem} wallet={selected} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sua carteira de ativos</Text>
                <PlusIcon onClick={() => setIsModalVisibled(true)} size={22} />
            </View>
            {renderLoading()}
            <View style={styles.content}>
                <FlatList
                    data={wallets}
                    renderItem={
                        ({ item: wallet }) => <View style={styles.flatListItem}>
                            <WalletItem
                                wallet={wallet}
                                onSelectItem={onSelectWalletItem}
                                onDeleteItem={onDeleteWalletItem}
                            />
                        </View>
                    }
                    keyExtractor={item => String(item.id)}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default WalletComponent;