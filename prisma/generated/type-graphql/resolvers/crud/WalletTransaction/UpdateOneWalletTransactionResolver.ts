import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWalletTransactionArgs } from "./args/UpdateOneWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class UpdateOneWalletTransactionResolver {
  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: true
  })
  async updateOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
