import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Wallet: crudResolvers.WalletCrudResolver,
  WalletTransaction: crudResolvers.WalletTransactionCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Wallet: {
    aggregateWallet: actionResolvers.AggregateWalletResolver,
    createManyWallet: actionResolvers.CreateManyWalletResolver,
    createOneWallet: actionResolvers.CreateOneWalletResolver,
    deleteManyWallet: actionResolvers.DeleteManyWalletResolver,
    deleteOneWallet: actionResolvers.DeleteOneWalletResolver,
    findFirstWallet: actionResolvers.FindFirstWalletResolver,
    findFirstWalletOrThrow: actionResolvers.FindFirstWalletOrThrowResolver,
    wallets: actionResolvers.FindManyWalletResolver,
    wallet: actionResolvers.FindUniqueWalletResolver,
    getWallet: actionResolvers.FindUniqueWalletOrThrowResolver,
    groupByWallet: actionResolvers.GroupByWalletResolver,
    updateManyWallet: actionResolvers.UpdateManyWalletResolver,
    updateOneWallet: actionResolvers.UpdateOneWalletResolver,
    upsertOneWallet: actionResolvers.UpsertOneWalletResolver
  },
  WalletTransaction: {
    aggregateWalletTransaction: actionResolvers.AggregateWalletTransactionResolver,
    createManyWalletTransaction: actionResolvers.CreateManyWalletTransactionResolver,
    createOneWalletTransaction: actionResolvers.CreateOneWalletTransactionResolver,
    deleteManyWalletTransaction: actionResolvers.DeleteManyWalletTransactionResolver,
    deleteOneWalletTransaction: actionResolvers.DeleteOneWalletTransactionResolver,
    findFirstWalletTransaction: actionResolvers.FindFirstWalletTransactionResolver,
    findFirstWalletTransactionOrThrow: actionResolvers.FindFirstWalletTransactionOrThrowResolver,
    walletTransactions: actionResolvers.FindManyWalletTransactionResolver,
    walletTransaction: actionResolvers.FindUniqueWalletTransactionResolver,
    getWalletTransaction: actionResolvers.FindUniqueWalletTransactionOrThrowResolver,
    groupByWalletTransaction: actionResolvers.GroupByWalletTransactionResolver,
    updateManyWalletTransaction: actionResolvers.UpdateManyWalletTransactionResolver,
    updateOneWalletTransaction: actionResolvers.UpdateOneWalletTransactionResolver,
    upsertOneWalletTransaction: actionResolvers.UpsertOneWalletTransactionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Wallet: ["aggregateWallet", "createManyWallet", "createOneWallet", "deleteManyWallet", "deleteOneWallet", "findFirstWallet", "findFirstWalletOrThrow", "wallets", "wallet", "getWallet", "groupByWallet", "updateManyWallet", "updateOneWallet", "upsertOneWallet"],
  WalletTransaction: ["aggregateWalletTransaction", "createManyWalletTransaction", "createOneWalletTransaction", "deleteManyWalletTransaction", "deleteOneWalletTransaction", "findFirstWalletTransaction", "findFirstWalletTransactionOrThrow", "walletTransactions", "walletTransaction", "getWalletTransaction", "groupByWalletTransaction", "updateManyWalletTransaction", "updateOneWalletTransaction", "upsertOneWalletTransaction"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateWalletArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWalletArgs: ["data", "skipDuplicates"],
  CreateOneWalletArgs: ["data"],
  DeleteManyWalletArgs: ["where"],
  DeleteOneWalletArgs: ["where"],
  FindFirstWalletArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWalletOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWalletArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWalletArgs: ["where"],
  FindUniqueWalletOrThrowArgs: ["where"],
  GroupByWalletArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWalletArgs: ["data", "where"],
  UpdateOneWalletArgs: ["data", "where"],
  UpsertOneWalletArgs: ["where", "create", "update"],
  AggregateWalletTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWalletTransactionArgs: ["data", "skipDuplicates"],
  CreateOneWalletTransactionArgs: ["data"],
  DeleteManyWalletTransactionArgs: ["where"],
  DeleteOneWalletTransactionArgs: ["where"],
  FindFirstWalletTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWalletTransactionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWalletTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWalletTransactionArgs: ["where"],
  FindUniqueWalletTransactionOrThrowArgs: ["where"],
  GroupByWalletTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWalletTransactionArgs: ["data", "where"],
  UpdateOneWalletTransactionArgs: ["data", "where"],
  UpsertOneWalletTransactionArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Wallet: relationResolvers.WalletRelationsResolver,
  WalletTransaction: relationResolvers.WalletTransactionRelationsResolver
};
const relationResolversInfo = {
  User: ["Wallets"],
  Wallet: ["owner", "transactionsSent", "transactionsReceived"],
  WalletTransaction: ["payee", "payer"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  Wallet: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletTransaction: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateWallet: ["_count", "_avg", "_sum", "_min", "_max"],
  WalletGroupBy: ["id", "ownerId", "balance", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWalletTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
  WalletTransactionGroupBy: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["Wallets"],
  UserCountAggregate: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  WalletCount: ["transactionsSent", "transactionsReceived"],
  WalletCountAggregate: ["id", "ownerId", "balance", "createdAt", "updatedAt", "_all"],
  WalletAvgAggregate: ["id", "balance"],
  WalletSumAggregate: ["id", "balance"],
  WalletMinAggregate: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletMaxAggregate: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletTransactionCountAggregate: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt", "_all"],
  WalletTransactionAvgAggregate: ["id", "value", "payeeId", "payerId"],
  WalletTransactionSumAggregate: ["id", "value", "payeeId", "payerId"],
  WalletTransactionMinAggregate: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionMaxAggregate: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "Wallets"],
  UserOrderByWithRelationInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "Wallets"],
  UserWhereUniqueInput: ["id", "email", "document", "AND", "OR", "NOT", "fullName", "userType", "password", "docuementType", "createdAt", "updatedAt", "Wallets"],
  UserOrderByWithAggregationInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  WalletWhereInput: ["AND", "OR", "NOT", "id", "ownerId", "balance", "createdAt", "updatedAt", "owner", "transactionsSent", "transactionsReceived"],
  WalletOrderByWithRelationInput: ["id", "ownerId", "balance", "createdAt", "updatedAt", "owner", "transactionsSent", "transactionsReceived"],
  WalletWhereUniqueInput: ["id", "AND", "OR", "NOT", "ownerId", "balance", "createdAt", "updatedAt", "owner", "transactionsSent", "transactionsReceived"],
  WalletOrderByWithAggregationInput: ["id", "ownerId", "balance", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  WalletScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletTransactionWhereInput: ["AND", "OR", "NOT", "id", "value", "payeeId", "payerId", "createdAt", "updatedAt", "payee", "payer"],
  WalletTransactionOrderByWithRelationInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt", "payee", "payer"],
  WalletTransactionWhereUniqueInput: ["id", "AND", "OR", "NOT", "value", "payeeId", "payerId", "createdAt", "updatedAt", "payee", "payer"],
  WalletTransactionOrderByWithAggregationInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  WalletTransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "Wallets"],
  UserUpdateInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt", "Wallets"],
  UserCreateManyInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  WalletCreateInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsSent", "transactionsReceived"],
  WalletUpdateInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsSent", "transactionsReceived"],
  WalletCreateManyInput: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletUpdateManyMutationInput: ["balance", "createdAt", "updatedAt"],
  WalletTransactionCreateInput: ["value", "createdAt", "updatedAt", "payee", "payer"],
  WalletTransactionUpdateInput: ["value", "createdAt", "updatedAt", "payee", "payer"],
  WalletTransactionCreateManyInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionUpdateManyMutationInput: ["value", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  EnumUserTypeFilter: ["equals", "in", "notIn", "not"],
  EnumDocumentTypeFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  WalletListRelationFilter: ["every", "some", "none"],
  WalletOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  EnumUserTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumDocumentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  WalletTransactionListRelationFilter: ["every", "some", "none"],
  WalletTransactionOrderByRelationAggregateInput: ["_count"],
  WalletCountOrderByAggregateInput: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletAvgOrderByAggregateInput: ["id", "balance"],
  WalletMaxOrderByAggregateInput: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletMinOrderByAggregateInput: ["id", "ownerId", "balance", "createdAt", "updatedAt"],
  WalletSumOrderByAggregateInput: ["id", "balance"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  WalletRelationFilter: ["is", "isNot"],
  WalletTransactionCountOrderByAggregateInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionAvgOrderByAggregateInput: ["id", "value", "payeeId", "payerId"],
  WalletTransactionMaxOrderByAggregateInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionMinOrderByAggregateInput: ["id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionSumOrderByAggregateInput: ["id", "value", "payeeId", "payerId"],
  WalletCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumUserTypeFieldUpdateOperationsInput: ["set"],
  EnumDocumentTypeFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  WalletUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutWalletsInput: ["create", "connectOrCreate", "connect"],
  WalletTransactionCreateNestedManyWithoutPayerInput: ["create", "connectOrCreate", "createMany", "connect"],
  WalletTransactionCreateNestedManyWithoutPayeeInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutWalletsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WalletTransactionUpdateManyWithoutPayerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WalletTransactionUpdateManyWithoutPayeeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  WalletCreateNestedOneWithoutTransactionsReceivedInput: ["create", "connectOrCreate", "connect"],
  WalletCreateNestedOneWithoutTransactionsSentInput: ["create", "connectOrCreate", "connect"],
  WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WalletUpdateOneRequiredWithoutTransactionsSentNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumUserTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDocumentTypeFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumUserTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumDocumentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  WalletCreateWithoutOwnerInput: ["balance", "createdAt", "updatedAt", "transactionsSent", "transactionsReceived"],
  WalletCreateOrConnectWithoutOwnerInput: ["where", "create"],
  WalletCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  WalletUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  WalletUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  WalletUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  WalletScalarWhereInput: ["AND", "OR", "NOT", "id", "ownerId", "balance", "createdAt", "updatedAt"],
  UserCreateWithoutWalletsInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutWalletsInput: ["where", "create"],
  WalletTransactionCreateWithoutPayerInput: ["value", "createdAt", "updatedAt", "payee"],
  WalletTransactionCreateOrConnectWithoutPayerInput: ["where", "create"],
  WalletTransactionCreateManyPayerInputEnvelope: ["data", "skipDuplicates"],
  WalletTransactionCreateWithoutPayeeInput: ["value", "createdAt", "updatedAt", "payer"],
  WalletTransactionCreateOrConnectWithoutPayeeInput: ["where", "create"],
  WalletTransactionCreateManyPayeeInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutWalletsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutWalletsInput: ["where", "data"],
  UserUpdateWithoutWalletsInput: ["id", "fullName", "userType", "email", "password", "document", "docuementType", "createdAt", "updatedAt"],
  WalletTransactionUpsertWithWhereUniqueWithoutPayerInput: ["where", "update", "create"],
  WalletTransactionUpdateWithWhereUniqueWithoutPayerInput: ["where", "data"],
  WalletTransactionUpdateManyWithWhereWithoutPayerInput: ["where", "data"],
  WalletTransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "value", "payeeId", "payerId", "createdAt", "updatedAt"],
  WalletTransactionUpsertWithWhereUniqueWithoutPayeeInput: ["where", "update", "create"],
  WalletTransactionUpdateWithWhereUniqueWithoutPayeeInput: ["where", "data"],
  WalletTransactionUpdateManyWithWhereWithoutPayeeInput: ["where", "data"],
  WalletCreateWithoutTransactionsReceivedInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsSent"],
  WalletCreateOrConnectWithoutTransactionsReceivedInput: ["where", "create"],
  WalletCreateWithoutTransactionsSentInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsReceived"],
  WalletCreateOrConnectWithoutTransactionsSentInput: ["where", "create"],
  WalletUpsertWithoutTransactionsReceivedInput: ["update", "create", "where"],
  WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput: ["where", "data"],
  WalletUpdateWithoutTransactionsReceivedInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsSent"],
  WalletUpsertWithoutTransactionsSentInput: ["update", "create", "where"],
  WalletUpdateToOneWithWhereWithoutTransactionsSentInput: ["where", "data"],
  WalletUpdateWithoutTransactionsSentInput: ["balance", "createdAt", "updatedAt", "owner", "transactionsReceived"],
  WalletCreateManyOwnerInput: ["id", "balance", "createdAt", "updatedAt"],
  WalletUpdateWithoutOwnerInput: ["balance", "createdAt", "updatedAt", "transactionsSent", "transactionsReceived"],
  WalletTransactionCreateManyPayerInput: ["id", "value", "payeeId", "createdAt", "updatedAt"],
  WalletTransactionCreateManyPayeeInput: ["id", "value", "payerId", "createdAt", "updatedAt"],
  WalletTransactionUpdateWithoutPayerInput: ["value", "createdAt", "updatedAt", "payee"],
  WalletTransactionUpdateWithoutPayeeInput: ["value", "createdAt", "updatedAt", "payer"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

