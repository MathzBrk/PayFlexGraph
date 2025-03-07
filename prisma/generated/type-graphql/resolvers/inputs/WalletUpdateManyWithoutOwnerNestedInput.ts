import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateManyOwnerInputEnvelope } from "../inputs/WalletCreateManyOwnerInputEnvelope";
import { WalletCreateOrConnectWithoutOwnerInput } from "../inputs/WalletCreateOrConnectWithoutOwnerInput";
import { WalletCreateWithoutOwnerInput } from "../inputs/WalletCreateWithoutOwnerInput";
import { WalletScalarWhereInput } from "../inputs/WalletScalarWhereInput";
import { WalletUpdateManyWithWhereWithoutOwnerInput } from "../inputs/WalletUpdateManyWithWhereWithoutOwnerInput";
import { WalletUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/WalletUpdateWithWhereUniqueWithoutOwnerInput";
import { WalletUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/WalletUpsertWithWhereUniqueWithoutOwnerInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateManyWithoutOwnerNestedInput", {})
export class WalletUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [WalletCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: WalletCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: WalletUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: WalletCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereUniqueInput], {
    nullable: true
  })
  set?: WalletWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WalletWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereUniqueInput], {
    nullable: true
  })
  delete?: WalletWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereUniqueInput], {
    nullable: true
  })
  connect?: WalletWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: WalletUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: WalletUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WalletScalarWhereInput[] | undefined;
}
