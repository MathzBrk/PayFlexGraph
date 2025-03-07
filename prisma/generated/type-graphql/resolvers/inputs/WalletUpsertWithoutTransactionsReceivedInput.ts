import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutTransactionsReceivedInput } from "../inputs/WalletCreateWithoutTransactionsReceivedInput";
import { WalletUpdateWithoutTransactionsReceivedInput } from "../inputs/WalletUpdateWithoutTransactionsReceivedInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpsertWithoutTransactionsReceivedInput", {})
export class WalletUpsertWithoutTransactionsReceivedInput {
  @TypeGraphQL.Field(_type => WalletUpdateWithoutTransactionsReceivedInput, {
    nullable: false
  })
  update!: WalletUpdateWithoutTransactionsReceivedInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsReceivedInput, {
    nullable: false
  })
  create!: WalletCreateWithoutTransactionsReceivedInput;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;
}
