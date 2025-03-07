import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateWithoutOwnerInput } from "../inputs/WalletUpdateWithoutOwnerInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateWithWhereUniqueWithoutOwnerInput", {})
export class WalletUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: WalletUpdateWithoutOwnerInput;
}
