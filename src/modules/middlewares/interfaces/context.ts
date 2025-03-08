import { IWalletTransactionRepository } from "../../transaction/repository/interface/walletTransaction-repository-interface";
import { IUserRepository } from "../../user/repository/interface/user-repository-interface";
import { IWalletRepository } from "../../wallet/repository/interface/wallet-repository-interface";

export interface MyContext {
    userRepository: IUserRepository;
    transactionRepository: IWalletTransactionRepository;
    walletRepository: IWalletRepository;
}