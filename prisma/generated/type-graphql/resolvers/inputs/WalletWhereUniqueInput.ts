import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WalletTransactionListRelationFilter } from "../inputs/WalletTransactionListRelationFilter";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletWhereUniqueInput", {})
export class WalletWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  AND?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  OR?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  NOT?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  balance?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionListRelationFilter, {
    nullable: true
  })
  transactionsSent?: WalletTransactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionListRelationFilter, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionListRelationFilter | undefined;
}
