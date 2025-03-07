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

const prisma = new PrismaClient();

async function main() {
  const schema = await buildSchema({
    resolvers:[
        UserResolver,
        WalletResolver
    ]
  })

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma })
  });
  
  const {url} = await server.listen()

  console.log(`Server Rodando na porta ${url}`)
}

main();