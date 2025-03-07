import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateWithoutPayerInput } from "../inputs/WalletTransactionCreateWithoutPayerInput";
import { WalletTransactionUpdateWithoutPayerInput } from "../inputs/WalletTransactionUpdateWithoutPayerInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionUpsertWithWhereUniqueWithoutPayerInput", {})
export class WalletTransactionUpsertWithWhereUniqueWithoutPayerInput {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateWithoutPayerInput, {
    nullable: false
  })
  update!: WalletTransactionUpdateWithoutPayerInput;

  @TypeGraphQL.Field(_type => WalletTransactionCreateWithoutPayerInput, {
    nullable: false
  })
  create!: WalletTransactionCreateWithoutPayerInput;
}
