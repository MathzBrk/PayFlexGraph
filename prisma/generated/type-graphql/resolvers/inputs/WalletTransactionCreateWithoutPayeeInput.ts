import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateNestedOneWithoutTransactionsSentInput } from "../inputs/WalletCreateNestedOneWithoutTransactionsSentInput";

@TypeGraphQL.InputType("WalletTransactionCreateWithoutPayeeInput", {})
export class WalletTransactionCreateWithoutPayeeInput {
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

  @TypeGraphQL.Field(_type => WalletCreateNestedOneWithoutTransactionsSentInput, {
    nullable: false
  })
  payer!: WalletCreateNestedOneWithoutTransactionsSentInput;
}
