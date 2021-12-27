import { Text, View, ActivityIndicator } from "react-native";
import { useCallback, useState } from "react";

import styles from "./styles";

import useWallet from "../../hooks/useWallet";
import { Wallet } from "../../models/Wallet";
import WalletItemModal from "../../components/WalletItemModal";
import PlusIcon from "../../components/PlusIcon";
import Icon from "../../components/Icon";
import WalletList from "../../components/WalletList";

const WalletComponent = () => {

    const { wallets, saveWalletItem, deleteWalletItem, loadingWallets, cleanWallet } = useWallet();
    const [selected, setSelected] = useState<Wallet>();
    const [isModalVisibled, setIsModalVisibled] = useState(false);

    const onSaveWalletItem = useCallback(async (wallet: Wallet) => {
        await saveWalletItem(wallet);
        setSelected(undefined);
    }, [saveWalletItem]);

    const onDeleteWalletItem = useCallback(async (wallet: Wallet) => {
        await deleteWalletItem(wallet);
        setSelected(undefined);
    }, [deleteWalletItem]);

    const onSelectWalletItem = useCallback(async (wallet: Wallet) => {
        setSelected(wallet);
        setIsModalVisibled(true);
    }, []);

    const onCleanWallet = useCallback(async () => {
        await cleanWallet();
    }, [cleanWallet]);

    const renderLoading = useCallback(() => {
        if (loadingWallets) {
            <ActivityIndicator
                size={"large"} color={"rgba(7, 55, 99, 1)"}
                style={{ height: 42 }}
            />
        };
        return null;
    }, [loadingWallets]);

    const renderHeader = useCallback(() => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Sua carteira de ativos</Text>
            <View style={styles.headerIcons}>
                {wallets.length > 0 && (
                    <Icon
                        name="block" size={23}
                        style={{ marginRight: 5 }} color="red" background="none"
                        onClick={() => onCleanWallet()}
                    />
                )}
                <PlusIcon onClick={() => setIsModalVisibled(true)} size={22} />
            </View>
        </View>
    ), [])

    return (
        <View style={styles.container}>
            <WalletItemModal visible={isModalVisibled} onClose={() => setIsModalVisibled(false)} onSave={onSaveWalletItem} wallet={selected} />
            {renderHeader()}
            {renderLoading()}
            <View style={styles.content}>
                <WalletList
                    data={wallets}
                    onSelectWallet={onSelectWalletItem}
                    onDeleteWallet={onDeleteWalletItem}
                />
            </View>
        </View>
    );
};

export default WalletComponent;