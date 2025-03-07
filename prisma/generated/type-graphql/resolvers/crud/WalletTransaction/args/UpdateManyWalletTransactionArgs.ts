import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionUpdateManyMutationInput } from "../../../inputs/WalletTransactionUpdateManyMutationInput";
import { WalletTransactionWhereInput } from "../../../inputs/WalletTransactionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: WalletTransactionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  where?: WalletTransactionWhereInput | undefined;
}
