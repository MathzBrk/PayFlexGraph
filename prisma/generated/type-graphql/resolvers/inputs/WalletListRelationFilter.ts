import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletListRelationFilter", {})
export class WalletListRelationFilter {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  every?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  some?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  none?: WalletWhereInput | undefined;
}
