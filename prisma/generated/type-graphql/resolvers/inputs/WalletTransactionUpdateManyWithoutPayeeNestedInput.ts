import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayeeInputEnvelope } from "../inputs/WalletTransactionCreateManyPayeeInputEnvelope";
import { WalletTransactionCreateOrConnectWithoutPayeeInput } from "../inputs/WalletTransactionCreateOrConnectWithoutPayeeInput";
import { WalletTransactionCreateWithoutPayeeInput } from "../inputs/WalletTransactionCreateWithoutPayeeInput";
import { WalletTransactionScalarWhereInput } from "../inputs/WalletTransactionScalarWhereInput";
import { WalletTransactionUpdateManyWithWhereWithoutPayeeInput } from "../inputs/WalletTransactionUpdateManyWithWhereWithoutPayeeInput";
import { WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput } from "../inputs/WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput";
import { WalletTransactionUpsertWithWhereUniqueWithoutPayeeInput } from "../inputs/WalletTransactionUpsertWithWhereUniqueWithoutPayeeInput";
import { WalletTransactionWhereUniqueInput } from "../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.InputType("WalletTransactionUpdateManyWithoutPayeeNestedInput", {})
export class WalletTransactionUpdateManyWithoutPayeeNestedInput {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateWithoutPayeeInput], {
    nullable: true
  })
  create?: WalletTransactionCreateWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionCreateOrConnectWithoutPayeeInput], {
    nullable: true
  })
  connectOrCreate?: WalletTransactionCreateOrConnectWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionUpsertWithWhereUniqueWithoutPayeeInput], {
    nullable: true
  })
  upsert?: WalletTransactionUpsertWithWhereUniqueWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCreateManyPayeeInputEnvelope, {
    nullable: true
  })
  createMany?: WalletTransactionCreateManyPayeeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput], {
    nullable: true
  })
  update?: WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionUpdateManyWithWhereWithoutPayeeInput], {
    nullable: true
  })
  updateMany?: WalletTransactionUpdateManyWithWhereWithoutPayeeInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WalletTransactionScalarWhereInput[] | undefined;
}
