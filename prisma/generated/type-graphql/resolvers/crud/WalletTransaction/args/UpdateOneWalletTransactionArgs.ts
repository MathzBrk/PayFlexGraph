import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionUpdateInput } from "../../../inputs/WalletTransactionUpdateInput";
import { WalletTransactionWhereUniqueInput } from "../../../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionUpdateInput, {
    nullable: false
  })
  data!: WalletTransactionUpdateInput;

  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;
}
