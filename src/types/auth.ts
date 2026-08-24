import type { User } from "./user";

export type LoginCredentials = {
  username: string;
  password: string;
};

export type RegisterCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  adress: string;
  zipcode: string
  city: string
};

export type AuthResponse = {
  user: User;
};
