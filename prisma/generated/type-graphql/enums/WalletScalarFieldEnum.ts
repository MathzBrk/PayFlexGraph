import * as TypeGraphQL from "type-graphql";

export enum WalletScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  balance = "balance",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(WalletScalarFieldEnum, {
  name: "WalletScalarFieldEnum",
  description: undefined,
});
