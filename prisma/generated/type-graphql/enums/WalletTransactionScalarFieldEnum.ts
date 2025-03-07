import * as TypeGraphQL from "type-graphql";

export enum WalletTransactionScalarFieldEnum {
  id = "id",
  value = "value",
  payeeId = "payeeId",
  payerId = "payerId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(WalletTransactionScalarFieldEnum, {
  name: "WalletTransactionScalarFieldEnum",
  description: undefined,
});
