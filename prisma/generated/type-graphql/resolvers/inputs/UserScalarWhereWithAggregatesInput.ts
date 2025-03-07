import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDocumentTypeWithAggregatesFilter } from "../inputs/EnumDocumentTypeWithAggregatesFilter";
import { EnumUserTypeWithAggregatesFilter } from "../inputs/EnumUserTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserScalarWhereWithAggregatesInput", {})
export class UserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fullName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUserTypeWithAggregatesFilter, {
    nullable: true
  })
  userType?: EnumUserTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  document?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDocumentTypeWithAggregatesFilter, {
    nullable: true
  })
  docuementType?: EnumDocumentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
