import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WalletScalarWhereInput", {})
export class WalletScalarWhereInput {
  @TypeGraphQL.Field(_type => [WalletScalarWhereInput], {
    nullable: true
  })
  AND?: WalletScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereInput], {
    nullable: true
  })
  OR?: WalletScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereInput], {
    nullable: true
  })
  NOT?: WalletScalarWhereInput[] | undefined;

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
}
