export interface CategoryAttributes {
  createdAt: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Category {
  attributes: CategoryAttributes;
  id: number;
}
