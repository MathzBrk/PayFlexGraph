import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutOwnerInput } from "../inputs/WalletCreateWithoutOwnerInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateOrConnectWithoutOwnerInput", {})
export class WalletCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: WalletCreateWithoutOwnerInput;
}
