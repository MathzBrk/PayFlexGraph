import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWalletsInput } from "../inputs/UserCreateNestedOneWithoutWalletsInput";
import { WalletTransactionCreateNestedManyWithoutPayerInput } from "../inputs/WalletTransactionCreateNestedManyWithoutPayerInput";

@TypeGraphQL.InputType("WalletCreateWithoutTransactionsReceivedInput", {})
export class WalletCreateWithoutTransactionsReceivedInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWalletsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutWalletsInput;

  @TypeGraphQL.Field(_type => WalletTransactionCreateNestedManyWithoutPayerInput, {
    nullable: true
  })
  transactionsSent?: WalletTransactionCreateNestedManyWithoutPayerInput | undefined;
}
