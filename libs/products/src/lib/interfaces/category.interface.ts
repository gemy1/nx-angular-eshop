import { IProduct } from './product.interface';

export interface ICategory {
  id?: number;

  name?: string;

  color?: string;

  description?: string;

  products?: IProduct[];
}
