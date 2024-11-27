// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Product, Category, FavoriteProduct, Message } = initSchema(schema);

export {
  User,
  Product,
  Category,
  FavoriteProduct,
  Message
};