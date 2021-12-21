export interface Wallet {
    id?: number;
    ticker?: string;
    quantity?: number;
    type?: keyof typeof WalletTypes;
}

export const WalletTypes = {
    stock: 'stock',
    fii: 'fii',
}

export type WalletType = keyof typeof WalletTypes;

export const getTypeFormatted = (type?: WalletType) => {
    switch (type) {
        case 'stock':
            return 'Ação';
        case 'fii':
            return 'FII';
    }
}