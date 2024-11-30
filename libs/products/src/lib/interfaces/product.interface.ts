import { ICategory } from './category.interface';

interface IImage {
  id: number;
  path: string;
}

export interface IProduct {
  id?: number;

  name?: string;

  description?: string;

  richDescription?: string;

  price?: number;

  mainImage?: IImage;

  imagesGallery?: IImage[];

  stockQuantity?: number;

  category?: ICategory;

  user?: any;

  tags?: string[];

  rating?: number;

  isFeatured?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
