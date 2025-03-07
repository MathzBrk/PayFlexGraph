import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutWalletsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutWalletsNestedInput";
import { WalletTransactionUpdateManyWithoutPayeeNestedInput } from "../inputs/WalletTransactionUpdateManyWithoutPayeeNestedInput";
import { WalletTransactionUpdateManyWithoutPayerNestedInput } from "../inputs/WalletTransactionUpdateManyWithoutPayerNestedInput";

@TypeGraphQL.InputType("WalletUpdateInput", {})
export class WalletUpdateInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWalletsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutWalletsNestedInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyWithoutPayerNestedInput, {
    nullable: true
  })
  transactionsSent?: WalletTransactionUpdateManyWithoutPayerNestedInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyWithoutPayeeNestedInput, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionUpdateManyWithoutPayeeNestedInput | undefined;
}
