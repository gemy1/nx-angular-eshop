import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credential: {
    username: string;
    password: string;
  }): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('http://localhost:3000/auth/login', credential)
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        })
      );
  }

  logout() {
    return this.http.get('http://localhost:3000/auth/logout').pipe(
      tap(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
    );
  }

  getUserInfo() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) return null;

    const decodedToken = this.decodeToken(accessToken);

    if (!decodedToken) return null;

    return decodedToken;
  }

  isAuthenticated() {
    const accessToken = this.getToken('accessToken');

    if (!accessToken) return false;

    const isValid = this.isTokenValid(accessToken);

    if (!isValid) return false;

    return true;
  }

  getToken(tokenType: 'accessToken' | 'refreshToken') {
    return localStorage.getItem(tokenType) || null;
  }

  decodeToken(token: string) {
    const payload = token.split('.')[1];

    if (!payload) return null;

    const decodedPayload = atob(payload);

    if (!decodedPayload) return null;

    return JSON.parse(decodedPayload);
  }

  isTokenValid(token: string) {
    const decodedToken = this.decodeToken(token);

    if (!decodedToken) return false;

    const isExpired = this.isTokenExpired(decodedToken.exp);

    if (isExpired) return false;

    return true;
  }

  isTokenExpired(expiration: number) {
    const expirationDate = new Date(expiration * 1000);

    return expirationDate < new Date();
  }
}
