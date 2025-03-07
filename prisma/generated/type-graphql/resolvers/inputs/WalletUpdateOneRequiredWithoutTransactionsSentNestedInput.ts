import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutTransactionsSentInput } from "../inputs/WalletCreateOrConnectWithoutTransactionsSentInput";
import { WalletCreateWithoutTransactionsSentInput } from "../inputs/WalletCreateWithoutTransactionsSentInput";
import { WalletUpdateToOneWithWhereWithoutTransactionsSentInput } from "../inputs/WalletUpdateToOneWithWhereWithoutTransactionsSentInput";
import { WalletUpsertWithoutTransactionsSentInput } from "../inputs/WalletUpsertWithoutTransactionsSentInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateOneRequiredWithoutTransactionsSentNestedInput", {})
export class WalletUpdateOneRequiredWithoutTransactionsSentNestedInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsSentInput, {
    nullable: true
  })
  create?: WalletCreateWithoutTransactionsSentInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutTransactionsSentInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutTransactionsSentInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpsertWithoutTransactionsSentInput, {
    nullable: true
  })
  upsert?: WalletUpsertWithoutTransactionsSentInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateToOneWithWhereWithoutTransactionsSentInput, {
    nullable: true
  })
  update?: WalletUpdateToOneWithWhereWithoutTransactionsSentInput | undefined;
}
