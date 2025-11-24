export interface ProductCategory {
  _id: string;
  name: string;
}

export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  category_id: string | ProductCategory;
}
