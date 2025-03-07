import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWalletTransactionArgs } from "./args/FindManyWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class FindManyWalletTransactionResolver {
  @TypeGraphQL.Query(_returns => [WalletTransaction], {
    nullable: false
  })
  async walletTransactions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWalletTransactionArgs): Promise<WalletTransaction[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
