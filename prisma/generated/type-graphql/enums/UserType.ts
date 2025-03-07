import * as TypeGraphQL from "type-graphql";

export enum UserType {
  MERCHANT = "MERCHANT",
  COMMON = "COMMON"
}
TypeGraphQL.registerEnumType(UserType, {
  name: "UserType",
  description: undefined,
});
