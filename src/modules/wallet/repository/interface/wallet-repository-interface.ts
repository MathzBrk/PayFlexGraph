import { CreateWalletInput } from "../../dtos/input/create-wallet-input";
import {CreateDepositInput} from "../../dtos/input/create-deposit-input"
import {GetWalletByIdInput} from "../../dtos/input/get-wallet-by-id"
import { Wallet } from "../../dtos/model/wallet";

export interface IWalletRepository{
    createWallet(wallet: CreateWalletInput): Promise<Wallet>;
    getWallet(): Promise<Wallet[]>;
    deposit(wallet: CreateDepositInput): Promise<Wallet>;
    walletExists(id: number):Promise<Wallet | null>;
}
