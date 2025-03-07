import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWalletTransactionArgs } from "./args/DeleteOneWalletTransactionArgs";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class DeleteOneWalletTransactionResolver {
  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: true
  })
  async deleteOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
