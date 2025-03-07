import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutTransactionsSentInput } from "../inputs/WalletCreateWithoutTransactionsSentInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateOrConnectWithoutTransactionsSentInput", {})
export class WalletCreateOrConnectWithoutTransactionsSentInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsSentInput, {
    nullable: false
  })
  create!: WalletCreateWithoutTransactionsSentInput;
}
