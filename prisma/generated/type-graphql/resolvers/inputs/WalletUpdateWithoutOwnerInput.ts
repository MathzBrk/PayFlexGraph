import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionUpdateManyWithoutPayeeNestedInput } from "../inputs/WalletTransactionUpdateManyWithoutPayeeNestedInput";
import { WalletTransactionUpdateManyWithoutPayerNestedInput } from "../inputs/WalletTransactionUpdateManyWithoutPayerNestedInput";

@TypeGraphQL.InputType("WalletUpdateWithoutOwnerInput", {})
export class WalletUpdateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  balance?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyWithoutPayerNestedInput, {
    nullable: true
  })
  transactionsSent?: WalletTransactionUpdateManyWithoutPayerNestedInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyWithoutPayeeNestedInput, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionUpdateManyWithoutPayeeNestedInput | undefined;
}
