export interface ProductAttributes {
  createdAt: string;
  description: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Product {
  attributes: ProductAttributes;
  id: number;
}
