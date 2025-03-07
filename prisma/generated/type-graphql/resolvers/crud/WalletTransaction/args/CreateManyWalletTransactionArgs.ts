import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionCreateManyInput } from "../../../inputs/WalletTransactionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWalletTransactionArgs {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateManyInput], {
    nullable: false
  })
  data!: WalletTransactionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
