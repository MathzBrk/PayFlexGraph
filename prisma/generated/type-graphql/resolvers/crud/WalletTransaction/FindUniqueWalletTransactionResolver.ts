import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWalletTransactionArgs } from "./args/FindUniqueWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class FindUniqueWalletTransactionResolver {
  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async walletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
