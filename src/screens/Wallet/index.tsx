import { Text, View, FlatList } from "react-native";
import { useCallback, useState } from "react";

import styles from "./styles";

import { Wallet } from "../../models/Wallet";
import WalletItem from "../../components/WalletItem";

const WalletComponent = () => {

    const [wallets, setWallets] = useState<Wallet[]>([
        { id: 1, ticker: 'A1', quantity: 1, type: 'fii' },
        { id: 2, ticker: 'b', quantity: 2, type: 'fii' },
        { id: 3, ticker: 'c', quantity: 3, type: 'fii' },
        { id: 4, ticker: 'd', quantity: 4, type: 'fii' },
        { id: 5, ticker: 'e', quantity: 1, type: 'fii' },
        { id: 6, ticker: 'f', quantity: 5, type: 'fii' },
        { id: 7, ticker: 'g', quantity: 6, type: 'fii' },
        { id: 8, ticker: 'h', quantity: 7, type: 'fii' },
        { id: 9, ticker: 'i', quantity: 6, type: 'fii' },
        { id: 10, ticker: 'j', quantity: 16, type: 'fii' },
        { id: 11, ticker: 'k', quantity: 4, type: 'fii' },
    ]);

    const onSaveWalletItem = useCallback((wallet: Wallet) => {
        setWallets(prev => {
            if (wallet.id) {
                const news: Wallet[] = [];
                prev.forEach(item => {
                    if (item.id === wallet.id) item = wallet;
                    news.push(item);
                });
                return news;
            } else {
                return [wallet, ...prev]
            }
        })
    }, []);

    return (
        <View style={styles.container}>
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
                />
            </View>
        </View>
    );
};

export default WalletComponent;