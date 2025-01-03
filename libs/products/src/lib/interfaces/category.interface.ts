import { IProduct } from './product.interface';

export interface ICategory {
  id?: number;

  name?: string;

  color?: string;

  description?: string;

  icon?: string;

  products?: IProduct[];
}

export interface CategoryResponse {
  data: ICategory[];

  totalRecord: number;
}
