import { useState, useCallback, useEffect } from "react";
import { Wallet } from "../models/Wallet";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useWallet = () => {
    const [wallets, _setWallets] = useState<Wallet[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('@WikkyInvest/wallets')
            .then(res => {
                if (res && res.length > 0) {
                    const json: Wallet[] = JSON.parse(res);
                    _setWallets(json);
                }
            })
    }, []);

    const saveWalletItem = useCallback(async (wallet: Wallet) => {
        if (wallet) {
            if (wallet.id) {
                if (wallets.length > 0) {
                    const newWallets = wallets.map((w, idx) => {
                        if (w.id === wallet.id) return wallet;
                        return w;
                    });
                    _setWallets(newWallets);
                } else {
                    _setWallets([wallet]); 
                }

            } else {
                _setWallets(prev => [...prev, { ...wallet, id: prev.length + 1 }]);
            }
        }
    }, [wallets, _setWallets]);

    return {
        wallets,
        saveWalletItem
    }
};

export default useWallet;