import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWalletTransactionArgs } from "./args/GroupByWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { WalletTransactionGroupBy } from "../../outputs/WalletTransactionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class GroupByWalletTransactionResolver {
  @TypeGraphQL.Query(_returns => [WalletTransactionGroupBy], {
    nullable: false
  })
  async groupByWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWalletTransactionArgs): Promise<WalletTransactionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
