import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayeeInputEnvelope } from "../inputs/WalletTransactionCreateManyPayeeInputEnvelope";
import { WalletTransactionCreateOrConnectWithoutPayeeInput } from "../inputs/WalletTransactionCreateOrConnectWithoutPayeeInput";
import { WalletTransactionCreateWithoutPayeeInput } from "../inputs/WalletTransactionCreateWithoutPayeeInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionCreateNestedManyWithoutPayeeInput", {})
export class WalletTransactionCreateNestedManyWithoutPayeeInput {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateWithoutPayeeInput], {
    nullable: true
  })
  create?: WalletTransactionCreateWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionCreateOrConnectWithoutPayeeInput], {
    nullable: true
  })
  connectOrCreate?: WalletTransactionCreateOrConnectWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCreateManyPayeeInputEnvelope, {
    nullable: true
  })
  createMany?: WalletTransactionCreateManyPayeeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: WalletTransactionWhereUniqueInput[] | undefined;
}
