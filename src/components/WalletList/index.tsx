import { FlatList, View, StyleSheet } from "react-native";

import WalletItem from '../WalletItem';
import { Wallet } from '../../models/Wallet';


interface Props<T> {
    data: T[];
    onSelectWallet?: (wallet: T) => void;
    onDeleteWallet?: (wallet: T) => Promise<void>;
    onCalculateWallet?: (wallet: T) => void;
}

const WalletList = (props: Props<Wallet>) => {
    const { data, onSelectWallet, onDeleteWallet, onCalculateWallet } = props;
    return (
        <FlatList
            data={data}
            renderItem={
                ({ item }) => <View style={styles.flatListItem}>
                    <WalletItem
                        wallet={item}
                        onSelectItem={onSelectWallet}
                        onDeleteItem={onDeleteWallet}
                        onCalculateItem={onCalculateWallet}
                    />
                </View>
            }
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default WalletList;

const styles = StyleSheet.create({
    flatListItem: {
        marginBottom: 16,
    }
});