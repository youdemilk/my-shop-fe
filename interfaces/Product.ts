import { Image } from '@root/interfaces/Image';

export interface ProductInterface {
  createdAt: string;
  description: string;
  name: string;
  price: string;
  publishedAt: string;
  updatedAt: string;
  image: Image;
}

export interface Product {
  attributes: ProductInterface;
  id: number;
}
