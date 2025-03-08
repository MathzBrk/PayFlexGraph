import { PrismaClient } from "@prisma/client";
import { IWalletTransactionRepository } from "./interface/walletTransaction-repository-interface";
import { CreateTransactionInput } from "../dtos/input/create-transaction-input";
import {walletTransaction} from "../dtos/model/walletTransaction";

export class TransactionRepository implements IWalletTransactionRepository{
    
    constructor(private prisma: PrismaClient ){}

    createTransaction(wallet: CreateTransactionInput): Promise<walletTransaction> {
        throw new Error("Method not implemented.");
    }
    getTransactions(): Promise<walletTransaction[]> {
        throw new Error("Method not implemented.");
    }
    walletTransactionExists(id: number): Promise<walletTransaction | null> {
        throw new Error("Method not implemented.");
    }



}