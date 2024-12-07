import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductResponse } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_BASE_URL = 'http://localhost:3000/';
  API_ROUTE = 'product';
  url = this.API_BASE_URL + this.API_ROUTE;

  constructor(private Http: HttpClient) {}

  getProducts(
    skip?: number,
    take?: number,
    orderBy?: string,
    sortOrder?: string,
    search?: string
  ): Observable<ProductResponse> {
    const params = new HttpParams({
      fromObject: {
        ...(skip && { skip: skip.toString() }),
        ...(take && { take: take.toString() }),
        ...(orderBy && { orderBy }),
        ...(sortOrder && { sortOrder }),
        ...(search && { search: search }),
      },
    });
    return this.Http.get<ProductResponse>(this.url, { params });
  }

  getProductById(productId: number): Observable<IProduct> {
    return this.Http.get<IProduct>(`${this.url}/${productId}`);
  }

  createProduct(product: IProduct) {
    return this.Http.post<IProduct>(this.url, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.Http.patch<IProduct>(`${this.url}/${product.id}`, product);
  }

  uploadMainImage(file: File, productId: number) {
    const formData = new FormData();
    formData.append('image', file);
    return this.Http.post<IProduct>(`${this.url}/${productId}/image`, formData);
  }
  deleteProduct(productId: number): Observable<IProduct> {
    return this.Http.delete<IProduct>(`${this.url}/${productId}`);
  }
}
