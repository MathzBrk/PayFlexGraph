import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WalletTransactionListRelationFilter } from "../inputs/WalletTransactionListRelationFilter";

@TypeGraphQL.InputType("WalletWhereInput", {})
export class WalletWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
