import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWalletTransactionOrThrowArgs } from "./args/FindFirstWalletTransactionOrThrowArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class FindFirstWalletTransactionOrThrowResolver {
  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async findFirstWalletTransactionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWalletTransactionOrThrowArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
