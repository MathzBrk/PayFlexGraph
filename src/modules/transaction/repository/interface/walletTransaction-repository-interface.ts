import { CreateTransactionInput } from "../../dtos/input/create-transaction-input";
import { walletTransaction } from "../../dtos/model/walletTransaction";

export interface IWalletTransactionRepository{
    createTransaction(wallet: CreateTransactionInput): Promise<walletTransaction>;
    getTransactions(): Promise<walletTransaction[]>;
    walletTransactionExists(id: number):Promise<walletTransaction | null>;
    
}
