import * as TypeGraphQL from "type-graphql";

export enum DocumentType {
  CNPJ = "CNPJ",
  CPF = "CPF"
}
TypeGraphQL.registerEnumType(DocumentType, {
  name: "DocumentType",
  description: undefined,
});
