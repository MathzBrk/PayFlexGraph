import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionCreateInput } from "../../../inputs/WalletTransactionCreateInput";
import { WalletTransactionUpdateInput } from "../../../inputs/WalletTransactionUpdateInput";
import { WalletTransactionWhereUniqueInput } from "../../../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletTransactionCreateInput, {
    nullable: false
  })
  create!: WalletTransactionCreateInput;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateInput, {
    nullable: false
  })
  update!: WalletTransactionUpdateInput;
}
