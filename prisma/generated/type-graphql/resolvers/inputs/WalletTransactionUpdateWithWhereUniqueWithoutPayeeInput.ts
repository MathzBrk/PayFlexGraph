import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionUpdateWithoutPayeeInput } from "../inputs/WalletTransactionUpdateWithoutPayeeInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput", {})
export class WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateWithoutPayeeInput, {
    nullable: false
  })
  data!: WalletTransactionUpdateWithoutPayeeInput;
}
