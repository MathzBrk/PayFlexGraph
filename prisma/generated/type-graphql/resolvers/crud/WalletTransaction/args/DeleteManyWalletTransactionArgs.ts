import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionWhereInput } from "../../../inputs/WalletTransactionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  where?: WalletTransactionWhereInput | undefined;
}
