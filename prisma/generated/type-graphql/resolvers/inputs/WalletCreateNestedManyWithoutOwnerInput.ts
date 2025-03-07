import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateManyOwnerInputEnvelope } from "../inputs/WalletCreateManyOwnerInputEnvelope";
import { WalletCreateOrConnectWithoutOwnerInput } from "../inputs/WalletCreateOrConnectWithoutOwnerInput";
import { WalletCreateWithoutOwnerInput } from "../inputs/WalletCreateWithoutOwnerInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateNestedManyWithoutOwnerInput", {})
export class WalletCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [WalletCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: WalletCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: WalletCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereUniqueInput], {
    nullable: true
  })
  connect?: WalletWhereUniqueInput[] | undefined;
}
