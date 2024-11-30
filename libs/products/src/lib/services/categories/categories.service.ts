import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private Http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.Http.get<ICategory[]>('http://localhost:3000/category');
  }

  createCategory(category: ICategory) {
    return this.Http.post<ICategory>(
      'http://localhost:3000/category',
      category
    );
  }

  updateCategory(category: ICategory): Observable<ICategory> {
    return this.Http.patch<ICategory>(
      `http://localhost:3000/category/${category.id}`,
      category
    );
  }
  deleteCategory(category: ICategory): Observable<void> {
    return this.Http.delete<void>(
      `http://localhost:3000/category/${category.id}`
    );
  }
}
