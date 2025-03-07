import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCountTransactionsReceivedArgs } from "./args/WalletCountTransactionsReceivedArgs";
import { WalletCountTransactionsSentArgs } from "./args/WalletCountTransactionsSentArgs";

@TypeGraphQL.ObjectType("WalletCount", {})
export class WalletCount {
  transactionsSent!: number;
  transactionsReceived!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "transactionsSent",
    nullable: false
  })
  getTransactionsSent(@TypeGraphQL.Root() root: WalletCount, @TypeGraphQL.Args() args: WalletCountTransactionsSentArgs): number {
    return root.transactionsSent;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "transactionsReceived",
    nullable: false
  })
  getTransactionsReceived(@TypeGraphQL.Root() root: WalletCount, @TypeGraphQL.Args() args: WalletCountTransactionsReceivedArgs): number {
    return root.transactionsReceived;
  }
}
