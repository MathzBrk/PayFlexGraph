import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionOrderByWithAggregationInput } from "../../../inputs/WalletTransactionOrderByWithAggregationInput";
import { WalletTransactionScalarWhereWithAggregatesInput } from "../../../inputs/WalletTransactionScalarWhereWithAggregatesInput";
import { WalletTransactionWhereInput } from "../../../inputs/WalletTransactionWhereInput";
import { WalletTransactionScalarFieldEnum } from "../../../../enums/WalletTransactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  where?: WalletTransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WalletTransactionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "value" | "payeeId" | "payerId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => WalletTransactionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WalletTransactionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
