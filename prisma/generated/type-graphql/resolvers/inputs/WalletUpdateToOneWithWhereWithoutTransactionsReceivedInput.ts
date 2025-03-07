import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateWithoutTransactionsReceivedInput } from "../inputs/WalletUpdateWithoutTransactionsReceivedInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput", {})
export class WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateWithoutTransactionsReceivedInput, {
    nullable: false
  })
  data!: WalletUpdateWithoutTransactionsReceivedInput;
}
