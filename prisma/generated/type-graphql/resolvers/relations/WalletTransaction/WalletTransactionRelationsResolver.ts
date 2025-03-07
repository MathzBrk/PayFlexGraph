import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Wallet } from "../../../models/Wallet";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class WalletTransactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Wallet, {
    nullable: false
  })
  async payee(@TypeGraphQL.Root() walletTransaction: WalletTransaction, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Wallet> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findUniqueOrThrow({
      where: {
        id: walletTransaction.id,
      },
    }).payee({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Wallet, {
    nullable: false
  })
  async payer(@TypeGraphQL.Root() walletTransaction: WalletTransaction, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Wallet> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findUniqueOrThrow({
      where: {
        id: walletTransaction.id,
      },
    }).payer({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
