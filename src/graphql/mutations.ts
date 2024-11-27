/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createFavoriteProduct = /* GraphQL */ `mutation CreateFavoriteProduct(
  $input: CreateFavoriteProductInput!
  $condition: ModelFavoriteProductConditionInput
) {
  createFavoriteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFavoriteProductMutationVariables,
  APITypes.CreateFavoriteProductMutation
>;
export const updateFavoriteProduct = /* GraphQL */ `mutation UpdateFavoriteProduct(
  $input: UpdateFavoriteProductInput!
  $condition: ModelFavoriteProductConditionInput
) {
  updateFavoriteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFavoriteProductMutationVariables,
  APITypes.UpdateFavoriteProductMutation
>;
export const deleteFavoriteProduct = /* GraphQL */ `mutation DeleteFavoriteProduct(
  $input: DeleteFavoriteProductInput!
  $condition: ModelFavoriteProductConditionInput
) {
  deleteFavoriteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFavoriteProductMutationVariables,
  APITypes.DeleteFavoriteProductMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
