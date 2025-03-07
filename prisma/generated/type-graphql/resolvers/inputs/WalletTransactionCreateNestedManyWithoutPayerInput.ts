import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayerInputEnvelope } from "../inputs/WalletTransactionCreateManyPayerInputEnvelope";
import { WalletTransactionCreateOrConnectWithoutPayerInput } from "../inputs/WalletTransactionCreateOrConnectWithoutPayerInput";
import { WalletTransactionCreateWithoutPayerInput } from "../inputs/WalletTransactionCreateWithoutPayerInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionCreateNestedManyWithoutPayerInput", {})
export class WalletTransactionCreateNestedManyWithoutPayerInput {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateWithoutPayerInput], {
    nullable: true
  })
  create?: WalletTransactionCreateWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionCreateOrConnectWithoutPayerInput], {
    nullable: true
  })
  connectOrCreate?: WalletTransactionCreateOrConnectWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCreateManyPayerInputEnvelope, {
    nullable: true
  })
  createMany?: WalletTransactionCreateManyPayerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: WalletTransactionWhereUniqueInput[] | undefined;
}
