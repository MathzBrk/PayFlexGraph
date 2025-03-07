import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionWhereUniqueInput } from "../../../inputs/WalletTransactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWalletTransactionOrThrowArgs {
  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: false
  })
  where!: WalletTransactionWhereUniqueInput;
}
