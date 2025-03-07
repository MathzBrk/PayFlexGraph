import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutTransactionsReceivedInput } from "../inputs/WalletCreateWithoutTransactionsReceivedInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateOrConnectWithoutTransactionsReceivedInput", {})
export class WalletCreateOrConnectWithoutTransactionsReceivedInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsReceivedInput, {
    nullable: false
  })
  create!: WalletCreateWithoutTransactionsReceivedInput;
}
