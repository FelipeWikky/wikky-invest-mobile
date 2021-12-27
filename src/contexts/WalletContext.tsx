import React, { createContext, useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Wallet } from "../models/Wallet";

export interface IWalletContext {
    wallets: Wallet[];
    saveWalletItem: (wallet: Wallet) => Promise<void>;
    deleteWalletItem: (wallet: Wallet) => Promise<void>;
    getWallets: () => Promise<Wallet[] | null>;
    cleanWallet: () => Promise<void>;
    loadingWallets: boolean;
};

const WalletContext = createContext<IWalletContext>({} as IWalletContext);

export const WalletProvider = ({ children }: any) => {
    const [_wallets, _setWallets] = useState<Wallet[]>([]);
    const [loadingWallets, setLoadingWallets] = useState(false);

    const _getWallets = useCallback(async () => {
        const str = await AsyncStorage.getItem('@WikkyInvest/wallets');
        if (str && str.length > 0) return JSON.parse(str) as Wallet[];
        return null;
    }, []);

    const _saveWallets = useCallback(async (pWallets: Wallet[]) => {
        if (pWallets) {
            await AsyncStorage.setItem('@WikkyInvest/wallets', JSON.stringify(pWallets));
        }
    }, []);

    const _updateContextWallets = useCallback(async () => {
        setLoadingWallets(true);
        const localWallets = await _getWallets();
        if (localWallets) _setWallets(localWallets);
        else _setWallets([]);
        setLoadingWallets(false);
    }, [_setWallets, _getWallets, setLoadingWallets]);

    const saveWalletItem = useCallback(async (wallet: Wallet) => {
        const oldWallets = await _getWallets();
        if (wallet.id) {
            const oldWallets = await _getWallets();
            if (oldWallets && oldWallets.length > 0) {
                const newWallets = oldWallets.map((w, idx) => {
                    if (w.id === wallet.id) return wallet;
                    return w;
                });
                _saveWallets(newWallets);
            } else {
                await _saveWallets([wallet]);
            }

        } else {
            if (oldWallets)
                await _saveWallets([...oldWallets, { ...wallet, id: oldWallets.length + 1 }]);
            else
                await _saveWallets([wallet]);

        }
        await _updateContextWallets();
    }, [_wallets, _setWallets]);

    const deleteWalletItem = useCallback(async (wallet: Wallet) => {
        if (wallet && wallet.id) {
            const localWallets = await _getWallets();
            if (localWallets && localWallets.length > 0) {
                const changedWallets = localWallets.filter(w => w.id !== wallet.id);
                await _saveWallets(changedWallets);
            }
        }
        _updateContextWallets();
    }, [_getWallets]);

    const cleanWallet = useCallback(async () => {
        await _saveWallets([]);
        await _updateContextWallets();
    }, []);

    useEffect(() => {
        async function loadWallets() {
            await _updateContextWallets();
        }
        loadWallets();
    }, []);

    return (
        <WalletContext.Provider value={
            {
                wallets: _wallets, loadingWallets,
                saveWalletItem,
                deleteWalletItem,
                getWallets: _getWallets,
                cleanWallet,
            }
        }>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletContext;