import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateNestedOneWithoutTransactionsReceivedInput } from "../inputs/WalletCreateNestedOneWithoutTransactionsReceivedInput";

@TypeGraphQL.InputType("WalletTransactionCreateWithoutPayerInput", {})
export class WalletTransactionCreateWithoutPayerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => WalletCreateNestedOneWithoutTransactionsReceivedInput, {
    nullable: false
  })
  payee!: WalletCreateNestedOneWithoutTransactionsReceivedInput;
}
