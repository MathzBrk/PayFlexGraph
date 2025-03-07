import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("WalletTransactionScalarWhereWithAggregatesInput", {})
export class WalletTransactionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WalletTransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WalletTransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WalletTransactionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  value?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  payeeId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  payerId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
