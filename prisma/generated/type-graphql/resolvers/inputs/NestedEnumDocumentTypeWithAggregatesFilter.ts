import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDocumentTypeFilter } from "../inputs/NestedEnumDocumentTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { DocumentType } from "../../enums/DocumentType";

@TypeGraphQL.InputType("NestedEnumDocumentTypeWithAggregatesFilter", {})
export class NestedEnumDocumentTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumDocumentTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumDocumentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDocumentTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumDocumentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDocumentTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumDocumentTypeFilter | undefined;
}
