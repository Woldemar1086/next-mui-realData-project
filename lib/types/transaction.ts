export type Currency = 'BTC' | 'ETH' | 'USDT' | 'USDC';
export type TransactionStatus = 'cleared' | 'flagged' | 'pending';
export type Chain = 'ethereum' | 'bitcoin' | 'polygon';

export interface Transaction {
    id: string;
    timestamp: string;
    fromAddress: string;
    toAddress: string;
    amount: number;
    currency: Currency;
    riskScore: number;
    status: TransactionStatus;
    chain: Chain;
}

export interface TransactionsPage {
    items: Transaction[];
    total: number;
    page: number;
    pageSize: number
}