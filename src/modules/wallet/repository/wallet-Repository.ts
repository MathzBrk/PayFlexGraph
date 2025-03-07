import { PrismaClient } from "@prisma/client";
import { IWalletRepository } from "./interface/wallet-repository-interface";
import { CreateWalletInput } from "../dtos/input/create-wallet-input";
import {CreateDepositInput} from "../dtos/input/create-deposit-input";
import {GetWalletByIdInput} from  "../dtos/input/get-wallet-by-id"
import {Wallet} from "../dtos/model/wallet";

export class WalletRepository implements IWalletRepository{
    private prisma = new PrismaClient();

    async createWallet(data: CreateWalletInput): Promise<Wallet> {
        return await this.prisma.wallet.create({
            data: {
                ...data
            }
        })
    }

    async getWallet(): Promise<Wallet[]> {
        return await this.prisma.wallet.findMany();
    }

    async deposit(data:CreateDepositInput):Promise<Wallet>{
        return await this.prisma.wallet.update({
            where:{id: data.id},
            data:{
                balance:{
                    increment:data.balance
                }
            }
        })
}
    async walletExists(id: number):Promise<Wallet | null>{
        const fds: Wallet | null = await this.prisma.wallet.findFirst({
            where:{
                id: id
            }
        })
        return fds;
    }
}