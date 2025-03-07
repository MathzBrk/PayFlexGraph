import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserTypeFilter } from "../inputs/NestedEnumUserTypeFilter";
import { NestedEnumUserTypeWithAggregatesFilter } from "../inputs/NestedEnumUserTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType("EnumUserTypeWithAggregatesFilter", {})
export class EnumUserTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUserTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumUserTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumUserTypeFilter | undefined;
}
