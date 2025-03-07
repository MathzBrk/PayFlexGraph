import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayerInputEnvelope } from "../inputs/WalletTransactionCreateManyPayerInputEnvelope";
import { WalletTransactionCreateOrConnectWithoutPayerInput } from "../inputs/WalletTransactionCreateOrConnectWithoutPayerInput";
import { WalletTransactionCreateWithoutPayerInput } from "../inputs/WalletTransactionCreateWithoutPayerInput";
import { WalletTransactionScalarWhereInput } from "../inputs/WalletTransactionScalarWhereInput";
import { WalletTransactionUpdateManyWithWhereWithoutPayerInput } from "../inputs/WalletTransactionUpdateManyWithWhereWithoutPayerInput";
import { WalletTransactionUpdateWithWhereUniqueWithoutPayerInput } from "../inputs/WalletTransactionUpdateWithWhereUniqueWithoutPayerInput";
import { WalletTransactionUpsertWithWhereUniqueWithoutPayerInput } from "../inputs/WalletTransactionUpsertWithWhereUniqueWithoutPayerInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionUpdateManyWithoutPayerNestedInput", {})
export class WalletTransactionUpdateManyWithoutPayerNestedInput {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateWithoutPayerInput], {
    nullable: true
  })
  create?: WalletTransactionCreateWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionCreateOrConnectWithoutPayerInput], {
    nullable: true
  })
  connectOrCreate?: WalletTransactionCreateOrConnectWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionUpsertWithWhereUniqueWithoutPayerInput], {
    nullable: true
  })
  upsert?: WalletTransactionUpsertWithWhereUniqueWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCreateManyPayerInputEnvelope, {
    nullable: true
  })
  createMany?: WalletTransactionCreateManyPayerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  set?: WalletTransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WalletTransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: WalletTransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: WalletTransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionUpdateWithWhereUniqueWithoutPayerInput], {
    nullable: true
  })
  update?: WalletTransactionUpdateWithWhereUniqueWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionUpdateManyWithWhereWithoutPayerInput], {
    nullable: true
  })
  updateMany?: WalletTransactionUpdateManyWithWhereWithoutPayerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WalletTransactionScalarWhereInput[] | undefined;
}
