import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WalletScalarWhereWithAggregatesInput", {})
export class WalletScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  balance?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
