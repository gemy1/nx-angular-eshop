export interface User {
  id?: number;

  username?: string;

  role?: string;

  email?: string;

  password?: string;
}

export interface UserResponse {
  data: User[];

  totalRecord: number;
}
