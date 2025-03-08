import "reflect-metadata"; 
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql"; 
import path from "path";
import { UserCreateInput } from "./prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client"; 
import { UserResolver } from "./src/modules/user/infra/user-resolver";


import {CreateOneUserResolver} from "./prisma/generated/type-graphql/resolvers/crud/User/CreateOneUserResolver";

import {FindManyUserResolver} from "./prisma/generated/type-graphql/resolvers/crud/User/FindManyUserResolver";
import { WalletResolver } from "./src/modules/wallet/infra/resolver-wallet";
import { MyContext } from "./src/modules/middlewares/interfaces/context";
import { UserRepository } from "./src/modules/user/repository/user-repository";
import { TransactionRepository } from "./src/modules/transaction/repository/transaction-Repository";
import { WalletRepository } from "./src/modules/wallet/repository/wallet-Repository";

const prisma = new PrismaClient();


async function main() {
  const schema = await buildSchema({
    resolvers:[
        UserResolver,
        WalletResolver
    ],
    validate: true,
  })

  const server = new ApolloServer({
    schema,
    context: (): MyContext => ({
      userRepository: new UserRepository(prisma),
      walletRepository: new WalletRepository(prisma),
      transactionRepository: new TransactionRepository(prisma) 
      }
    ),
  });
  
  const {url} = await server.listen()

  console.log(`Server Rodando na porta ${url}`)
}

main();