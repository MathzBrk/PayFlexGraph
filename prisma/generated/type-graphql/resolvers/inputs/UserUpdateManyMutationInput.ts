import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentType } from "../../enums/DocumentType";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType("UserUpdateManyMutationInput", {})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | undefined;

  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  userType?: "MERCHANT" | "COMMON" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document?: string | undefined;

  @TypeGraphQL.Field(_type => DocumentType, {
    nullable: true
  })
  docuementType?: "CNPJ" | "CPF" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
