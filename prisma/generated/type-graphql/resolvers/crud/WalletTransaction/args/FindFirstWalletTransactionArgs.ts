import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletTransactionOrderByWithRelationInput } from "../../../inputs/WalletTransactionOrderByWithRelationInput";
import { WalletTransactionWhereInput } from "../../../inputs/WalletTransactionWhereInput";
import { WalletTransactionWhereUniqueInput } from "../../../inputs/WalletTransactionWhereUniqueInput";
import { WalletTransactionScalarFieldEnum } from "../../../../enums/WalletTransactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWalletTransactionArgs {
  @TypeGraphQL.Field(_type => WalletTransactionWhereInput, {
    nullable: true
  })
  where?: WalletTransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WalletTransactionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionWhereUniqueInput, {
    nullable: true
  })
  cursor?: WalletTransactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WalletTransactionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "value" | "payeeId" | "payerId" | "createdAt" | "updatedAt"> | undefined;
}
