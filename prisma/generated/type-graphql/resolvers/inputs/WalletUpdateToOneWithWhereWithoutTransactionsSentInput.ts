import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateWithoutTransactionsSentInput } from "../inputs/WalletUpdateWithoutTransactionsSentInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpdateToOneWithWhereWithoutTransactionsSentInput", {})
export class WalletUpdateToOneWithWhereWithoutTransactionsSentInput {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateWithoutTransactionsSentInput, {
    nullable: false
  })
  data!: WalletUpdateWithoutTransactionsSentInput;
}
