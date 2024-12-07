import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CategoryResponse,
  ICategory,
} from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  API_BASE_URL = 'http://localhost:3000/';
  API_ROUTE = 'category';
  url = this.API_BASE_URL + this.API_ROUTE;

  constructor(private Http: HttpClient) {}

  getCategories(
    skip?: number,
    take?: number,
    orderBy?: string,
    sortOrder?: 'asc' | 'desc',
    search?: string
  ): Observable<CategoryResponse> {
    const params = new HttpParams({
      fromObject: {
        ...(skip && { skip: skip.toString() }),
        ...(take && { take: take.toString() }),
        ...(orderBy && { orderBy }),
        ...(sortOrder && { sortOrder }),
        ...(search && { search: search }),
      },
    });

    return this.Http.get<CategoryResponse>(this.url, { params: params });
  }

  createCategory(category: ICategory) {
    return this.Http.post<ICategory>(this.url, category);
  }

  updateCategory(category: ICategory): Observable<ICategory> {
    return this.Http.patch<ICategory>(`${this.url}/${category.id}`, category);
  }
  deleteCategory(category: ICategory): Observable<void> {
    return this.Http.delete<void>(`${this.url}/${category.id}`);
  }
}
