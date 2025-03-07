import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutTransactionsSentInput } from "../inputs/WalletCreateWithoutTransactionsSentInput";
import { WalletUpdateWithoutTransactionsSentInput } from "../inputs/WalletUpdateWithoutTransactionsSentInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpsertWithoutTransactionsSentInput", {})
export class WalletUpsertWithoutTransactionsSentInput {
  @TypeGraphQL.Field(_type => WalletUpdateWithoutTransactionsSentInput, {
    nullable: false
  })
  update!: WalletUpdateWithoutTransactionsSentInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsSentInput, {
    nullable: false
  })
  create!: WalletCreateWithoutTransactionsSentInput;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;
}
