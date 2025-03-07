import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput } from "../inputs/WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput";

@TypeGraphQL.InputType("WalletTransactionUpdateWithoutPayerInput", {})
export class WalletTransactionUpdateWithoutPayerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  value?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput, {
    nullable: true
  })
  payee?: WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput | undefined;
}
