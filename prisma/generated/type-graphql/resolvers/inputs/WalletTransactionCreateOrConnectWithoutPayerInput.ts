import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateWithoutPayerInput } from "../inputs/WalletTransactionCreateWithoutPayerInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionCreateOrConnectWithoutPayerInput", {})
export class WalletTransactionCreateOrConnectWithoutPayerInput {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionCreateWithoutPayerInput, {
    nullable: false
  })
  create!: WalletTransactionCreateWithoutPayerInput;
}
