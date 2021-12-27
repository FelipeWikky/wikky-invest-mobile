import { Text, View, ActivityIndicator } from "react-native";
import { useCallback, useState } from "react";

import styles from "./styles";

import useWallet from "../../hooks/useWallet";
import { Wallet } from "../../models/Wallet";
import WalletItemModal from "../../components/WalletItemModal";
import WalletCalculateModal, { CalculateStockModalHandles } from "../../components/CalculateStockModal";
import PlusIcon from "../../components/PlusIcon";
import Icon from "../../components/Icon";
import WalletList from "../../components/WalletList";
import { useRef } from "react";

const WalletComponent = () => {


    const { wallets, saveWalletItem, deleteWalletItem, loadingWallets, cleanWallet } = useWallet();
    const [selected, setSelected] = useState<Wallet>();
    const [isSelectModal, setIsSelectModal] = useState(false);

    const calculateModalRef = useRef<CalculateStockModalHandles>(null);

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
        setIsSelectModal(true);
    }, []);
    const onCalculateWalletItem = useCallback(async (wallet: Wallet) => {
        calculateModalRef.current?.selectWallet(wallet);
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
                <PlusIcon onClick={() => setIsSelectModal(true)} size={22} />
            </View>
        </View>
    ), [wallets]);

    return (
        <View style={styles.container}>
            <WalletItemModal
                visible={isSelectModal}
                onClose={() => setIsSelectModal(false)}
                onSave={onSaveWalletItem}
                wallet={selected}
            />

            <WalletCalculateModal ref={calculateModalRef} />

            {renderHeader()}
            {renderLoading()}
            <View style={styles.content}>
                <WalletList
                    data={wallets}
                    onSelectWallet={onSelectWalletItem}
                    onDeleteWallet={onDeleteWalletItem}
                    onCalculateWallet={onCalculateWalletItem}
                />
            </View>
        </View>
    );
};

export default WalletComponent;