import { View, Text } from "react-native";
import { useCallback, useState } from "react";

import WalletList from "../../components/WalletList";
import useWallet from "../../hooks/useWallet";

import styles from "./styles";

const Calculate = () => {
    const { wallets, } = useWallet();
    const [total, setTotal] = useState(0);

    const renderHeader = useCallback(() => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Seus ativos</Text>
            <View style={styles.headerIcons}>
                <Text style={styles.headerTotal}>Dividendo total: {total.toFixed(2)}</Text>
            </View>
        </View>
    ), [total]);

    const onCalculateCallback = useCallback((total: string | number, totalOld: string | number) => {
        setTotal(prev => (prev - Number(totalOld)) + Number(total));
    }, []);

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={styles.content}>
                <WalletList
                    data={wallets}
                    isCalculate={true}
                    calculateCallback={onCalculateCallback}
                />
            </View>
        </View>
    );
};

export default Calculate;