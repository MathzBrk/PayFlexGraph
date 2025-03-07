import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionCreateInput } from "../../../inputs/WalletTransactionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionCreateInput, {
    nullable: false
  })
  data!: WalletTransactionCreateInput;
}
