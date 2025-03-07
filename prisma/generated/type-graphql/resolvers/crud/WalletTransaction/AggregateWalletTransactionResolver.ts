import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWalletTransactionArgs } from "./args/AggregateWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { AggregateWalletTransaction } from "../../outputs/AggregateWalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class AggregateWalletTransactionResolver {
  @TypeGraphQL.Query(_returns => AggregateWalletTransaction, {
    nullable: false
  })
  async aggregateWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWalletTransactionArgs): Promise<AggregateWalletTransaction> {
    return getPrismaFromContext(ctx).walletTransaction.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
