import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

/**
 * use this hook to get values in  WalletContext
 * @example const {wallets, saveWalletItem, deleteWalletItem} = useWallet();
 */
const useWallet = () => {
    const { wallets, saveWalletItem, deleteWalletItem, getWallets, loadingWallets, cleanWallet } = useContext(WalletContext);

    return {
        wallets, getWallets, loadingWallets,
        saveWalletItem, deleteWalletItem, cleanWallet
    }
};

export default useWallet;