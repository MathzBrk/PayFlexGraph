import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentType } from "../../enums/DocumentType";

@TypeGraphQL.InputType("EnumDocumentTypeFieldUpdateOperationsInput", {})
export class EnumDocumentTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => DocumentType, {
    nullable: true
  })
  set?: "CNPJ" | "CPF" | undefined;
}
