import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutTransactionsSentInput } from "../inputs/WalletCreateOrConnectWithoutTransactionsSentInput";
import { WalletCreateWithoutTransactionsSentInput } from "../inputs/WalletCreateWithoutTransactionsSentInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateNestedOneWithoutTransactionsSentInput", {})
export class WalletCreateNestedOneWithoutTransactionsSentInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsSentInput, {
    nullable: true
  })
  create?: WalletCreateWithoutTransactionsSentInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutTransactionsSentInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutTransactionsSentInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;
}
