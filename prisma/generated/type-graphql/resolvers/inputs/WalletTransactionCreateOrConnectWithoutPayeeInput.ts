import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateWithoutPayeeInput } from "../inputs/WalletTransactionCreateWithoutPayeeInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionCreateOrConnectWithoutPayeeInput", {})
export class WalletTransactionCreateOrConnectWithoutPayeeInput {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionCreateWithoutPayeeInput, {
    nullable: false
  })
  create!: WalletTransactionCreateWithoutPayeeInput;
}
