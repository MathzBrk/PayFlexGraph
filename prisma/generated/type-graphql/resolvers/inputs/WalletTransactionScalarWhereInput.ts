import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("WalletTransactionScalarWhereInput", {})
export class WalletTransactionScalarWhereInput {
  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereInput], {
    nullable: true
  })
  AND?: WalletTransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereInput], {
    nullable: true
  })
  OR?: WalletTransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereInput], {
    nullable: true
  })
  NOT?: WalletTransactionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  value?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  payeeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  payerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
