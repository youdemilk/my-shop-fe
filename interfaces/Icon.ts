import { Image } from '@root/interfaces/Image';

export interface IconAttributes {
  createdAt: string;
  image: Image;
  name: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Icon {
  attributes: IconAttributes;
  id: number;
}
