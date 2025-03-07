import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionWhereInput } from "../inputs/WalletTransactionWhereInput";

@TypeGraphQL.InputType("WalletTransactionListRelationFilter", {})
export class WalletTransactionListRelationFilter {
  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  every?: WalletTransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  some?: WalletTransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  none?: WalletTransactionWhereInput | undefined;
}
