import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWalletsInput } from "../inputs/UserCreateNestedOneWithoutWalletsInput";
import { WalletTransactionCreateNestedManyWithoutPayeeInput } from "../inputs/WalletTransactionCreateNestedManyWithoutPayeeInput";

@TypeGraphQL.InputType("WalletCreateWithoutTransactionsSentInput", {})
export class WalletCreateWithoutTransactionsSentInput {
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

  @TypeGraphQL.Field(_type => WalletTransactionCreateNestedManyWithoutPayeeInput, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionCreateNestedManyWithoutPayeeInput | undefined;
}
