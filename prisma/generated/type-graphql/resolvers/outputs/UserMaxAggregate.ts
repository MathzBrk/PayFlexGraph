import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentType } from "../../enums/DocumentType";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.ObjectType("UserMaxAggregate", {})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName!: string | null;

  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  userType!: "MERCHANT" | "COMMON" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document!: string | null;

  @TypeGraphQL.Field(_type => DocumentType, {
    nullable: true
  })
  docuementType!: "CNPJ" | "CPF" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
