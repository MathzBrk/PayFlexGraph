import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionUpdateWithoutPayerInput } from "../inputs/WalletTransactionUpdateWithoutPayerInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionUpdateWithWhereUniqueWithoutPayerInput", {})
export class WalletTransactionUpdateWithWhereUniqueWithoutPayerInput {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateWithoutPayerInput, {
    nullable: false
  })
  data!: WalletTransactionUpdateWithoutPayerInput;
}
