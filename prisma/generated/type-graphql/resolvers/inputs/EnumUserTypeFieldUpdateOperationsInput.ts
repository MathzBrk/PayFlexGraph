import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType("EnumUserTypeFieldUpdateOperationsInput", {})
export class EnumUserTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  set?: "MERCHANT" | "COMMON" | undefined;
}
