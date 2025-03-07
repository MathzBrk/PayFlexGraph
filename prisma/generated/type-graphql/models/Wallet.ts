import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { WalletTransaction } from "../models/WalletTransaction";
import { WalletCount } from "../resolvers/outputs/WalletCount";

@TypeGraphQL.ObjectType("Wallet", {})
export class Wallet {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  owner?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  balance!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  transactionsSent?: WalletTransaction[];

  transactionsReceived?: WalletTransaction[];

  @TypeGraphQL.Field(_type => WalletCount, {
    nullable: true
  })
  _count?: WalletCount | null;
}
