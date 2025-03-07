import {PrismaClient} from "@prisma/client"
import {Query,Resolver,Mutation,Arg} from "type-graphql"
import {Wallet} from "../dtos/model/wallet"
import{CreateWalletInput} from "../dtos/input/create-wallet-input"
import{CreateDepositInput} from "../dtos/input/create-deposit-input"
import { IWalletRepository } from "../repository/interface/wallet-repository-interface";
import { WalletRepository } from "../repository/wallet-Repository"

const prisma = new PrismaClient();

@Resolver(()=> Wallet)
export class WalletResolver{

    private repository: IWalletRepository

    constructor(){
        this.repository = new WalletRepository();
    }

    @Mutation(() => Wallet)
    async createWallet(@Arg('data') data: CreateWalletInput):Promise<Wallet>{
        

        return await this.repository.createWallet(data)
    
    }

    @Query(() => Boolean)
    async getById(@Arg('data') data: number): Promise<boolean>{

        const wallet: Wallet | null = await this.repository.walletExists(data);

        if(wallet === null){
            false;
        }

        return true;
        
    }


    @Query(() => [Wallet])
    async getWallets():Promise<Wallet[]>{
        return await this.repository.getWallet()
        
    }


    @Mutation(()=> Wallet)
    async deposit(
        @Arg('data') data:CreateDepositInput):Promise<Wallet>{

            const walletExists: boolean = await this.getById(data.id) ? true : false;

            walletExists ? console.log("Wallet exists") : new Error("Wallet does not exist");

            return await this.repository.deposit(data)
            
        }
    
    
}
