import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { WalletRelationFilter } from "../inputs/WalletRelationFilter";
import { WalletTransactionWhereInput } from "../inputs/WalletTransactionWhereInput";

@TypeGraphQL.InputType("WalletTransactionWhereUniqueInput", {})
export class WalletTransactionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereInput], {
    nullable: true
  })
  AND?: WalletTransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereInput], {
    nullable: true
  })
  OR?: WalletTransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereInput], {
    nullable: true
  })
  NOT?: WalletTransactionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => WalletRelationFilter, {
    nullable: true
  })
  payee?: WalletRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WalletRelationFilter, {
    nullable: true
  })
  payer?: WalletRelationFilter | undefined;
}
