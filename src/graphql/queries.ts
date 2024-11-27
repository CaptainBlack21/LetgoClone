/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    image
    images
    brand
    price
    rating
    numReview
    isFeatured
    name
    description
    countInStock
    category {
      id
      name
      src
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    categoryProductsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const syncProducts = /* GraphQL */ `query SyncProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProductsQueryVariables,
  APITypes.SyncProductsQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    src
    products {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      src
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const syncCategories = /* GraphQL */ `query SyncCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      src
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCategoriesQueryVariables,
  APITypes.SyncCategoriesQuery
>;
export const getFavoriteProduct = /* GraphQL */ `query GetFavoriteProduct($id: ID!) {
  getFavoriteProduct(id: $id) {
    id
    userSub
    productID
    product {
      id
      image
      images
      brand
      price
      rating
      numReview
      isFeatured
      name
      description
      countInStock
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    favoriteProductProductId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFavoriteProductQueryVariables,
  APITypes.GetFavoriteProductQuery
>;
export const listFavoriteProducts = /* GraphQL */ `query ListFavoriteProducts(
  $filter: ModelFavoriteProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavoriteProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSub
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFavoriteProductsQueryVariables,
  APITypes.ListFavoriteProductsQuery
>;
export const syncFavoriteProducts = /* GraphQL */ `query SyncFavoriteProducts(
  $filter: ModelFavoriteProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFavoriteProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userSub
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      favoriteProductProductId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFavoriteProductsQueryVariables,
  APITypes.SyncFavoriteProductsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    image
    productName
    sellerName
    situation
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const syncMessages = /* GraphQL */ `query SyncMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      image
      productName
      sellerName
      situation
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessagesQueryVariables,
  APITypes.SyncMessagesQuery
>;
