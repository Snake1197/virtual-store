export default interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  quantity?: number;
  images: string[];
  colors?: string[];
  units?: number;
  onsale?: number;
  total?: number;
}
