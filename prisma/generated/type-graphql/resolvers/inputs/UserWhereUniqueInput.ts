import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDocumentTypeFilter } from "../inputs/EnumDocumentTypeFilter";
import { EnumUserTypeFilter } from "../inputs/EnumUserTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { WalletListRelationFilter } from "../inputs/WalletListRelationFilter";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document?: string | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fullName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUserTypeFilter, {
    nullable: true
  })
  userType?: EnumUserTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDocumentTypeFilter, {
    nullable: true
  })
  docuementType?: EnumDocumentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => WalletListRelationFilter, {
    nullable: true
  })
  Wallets?: WalletListRelationFilter | undefined;
}
