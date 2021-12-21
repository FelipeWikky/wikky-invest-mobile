import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useCallback, useState } from "react";

import styles from "./styles";

import useWallet from "../../hooks/useWallet";
import { Wallet } from "../../models/Wallet";
import WalletItem from "../../components/WalletItem";
import WalletItemModal from "../../components/WalletItemModal";

const WalletComponent = () => {

    const { wallets, saveWalletItem } = useWallet();
    const [isModalVisibled, setIsModalVisibled] = useState(false);


    const onSaveWalletItem = useCallback(async(wallet: Wallet) => {
        await saveWalletItem(wallet);
    }, []);

    return (
        <View style={styles.container}>
            <WalletItemModal visible={isModalVisibled} onClose={() => setIsModalVisibled(false)} onSave={onSaveWalletItem} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sua certeira de ativos</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={wallets}
                    renderItem={
                        ({ item: wallet }) => <View style={styles.flatListItem}>
                            <WalletItem wallet={wallet} onSaveWallet={onSaveWalletItem} />
                        </View>
                    }
                    keyExtractor={item => String(item.id)}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <TouchableOpacity onPress={() => setIsModalVisibled(true)}><Text>Adicionar novo ativo</Text></TouchableOpacity>}
                />
            </View>
        </View>
    );
};

export default WalletComponent;