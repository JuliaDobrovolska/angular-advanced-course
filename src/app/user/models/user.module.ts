export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

export interface UserData {
  data: User[];
  total: number;
  page: number;
  limit: number;
}
