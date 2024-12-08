import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_BASE_URL = 'http://localhost:3000/';
  API_ROUTE = 'users';
  url = this.API_BASE_URL + this.API_ROUTE;

  constructor(private http: HttpClient) {}

  getUsers(
    skip?: number,
    take?: number,
    orderBy?: string,
    sortOrder?: string,
    search?: string
  ): Observable<UserResponse> {
    const params = new HttpParams({
      fromObject: {
        ...(skip && { skip: skip.toString() }),
        ...(take && { take: take.toString() }),
        ...(orderBy && { orderBy }),
        ...(sortOrder && { sortOrder }),
        ...(search && { search: search }),
      },
    });
    return this.http.get<UserResponse>(this.url, { params });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_BASE_URL + 'auth/register', user);
  }

  updateUser(user: User) {
    return this.http.patch<User>(`${this.url}/${user.id}`, user);
  }

  deleteUser(user: User) {
    return this.http.delete<void>(`${this.url}/${user.id}`);
  }
}
