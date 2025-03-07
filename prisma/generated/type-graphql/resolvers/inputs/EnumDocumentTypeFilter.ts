import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDocumentTypeFilter } from "../inputs/NestedEnumDocumentTypeFilter";
import { DocumentType } from "../../enums/DocumentType";

@TypeGraphQL.InputType("EnumDocumentTypeFilter", {})
export class EnumDocumentTypeFilter {
  @TypeGraphQL.Field(_type => DocumentType, {
    nullable: true
  })
  equals?: "CNPJ" | "CPF" | undefined;

  @TypeGraphQL.Field(_type => [DocumentType], {
    nullable: true
  })
  in?: Array<"CNPJ" | "CPF"> | undefined;

  @TypeGraphQL.Field(_type => [DocumentType], {
    nullable: true
  })
  notIn?: Array<"CNPJ" | "CPF"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDocumentTypeFilter, {
    nullable: true
  })
  not?: NestedEnumDocumentTypeFilter | undefined;
}
