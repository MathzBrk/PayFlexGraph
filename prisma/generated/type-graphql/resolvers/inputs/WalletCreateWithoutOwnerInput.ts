import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateNestedManyWithoutPayeeInput } from "../inputs/WalletTransactionCreateNestedManyWithoutPayeeInput";
import { WalletTransactionCreateNestedManyWithoutPayerInput } from "../inputs/WalletTransactionCreateNestedManyWithoutPayerInput";

@TypeGraphQL.InputType("WalletCreateWithoutOwnerInput", {})
export class WalletCreateWithoutOwnerInput {
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

  @TypeGraphQL.Field(_type => WalletTransactionCreateNestedManyWithoutPayerInput, {
    nullable: true
  })
  transactionsSent?: WalletTransactionCreateNestedManyWithoutPayerInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCreateNestedManyWithoutPayeeInput, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionCreateNestedManyWithoutPayeeInput | undefined;
}
