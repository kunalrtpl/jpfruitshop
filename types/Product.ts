export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  product_name: string;
  category: Category; // category should be an object with name
  final_price: number;
  short_description?: string;
  image: string;
}
