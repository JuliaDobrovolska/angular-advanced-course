export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface UserData {
  data: User[];
  total: number;
  page: number;
  limit: number;
}
