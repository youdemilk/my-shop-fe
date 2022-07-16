export interface ProductCardInterface {
  attributes: Attributes;
  id: number;
}

interface Attributes {
  createdAt: string;
  description: string;
  name: string;
  price: string;
  publishedAt: string;
  updatedAt: string;
}
