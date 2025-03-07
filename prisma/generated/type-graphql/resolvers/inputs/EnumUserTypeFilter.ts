import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserTypeFilter } from "../inputs/NestedEnumUserTypeFilter";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType("EnumUserTypeFilter", {})
export class EnumUserTypeFilter {
  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  equals?: "MERCHANT" | "COMMON" | undefined;

  @TypeGraphQL.Field(_type => [UserType], {
    nullable: true
  })
  in?: Array<"MERCHANT" | "COMMON"> | undefined;

  @TypeGraphQL.Field(_type => [UserType], {
    nullable: true
  })
  notIn?: Array<"MERCHANT" | "COMMON"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeFilter, {
    nullable: true
  })
  not?: NestedEnumUserTypeFilter | undefined;
}
