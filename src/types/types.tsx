export interface AuthResponse {
    token: string;
}

export interface User {
    username: string;
    email: string;
    password: string;
    fullname: string;
}

export interface loginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    fullname: string;
}

export interface postPoductRequest {
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  avaliability: "DISPONIBLE" | "AGOTADO" | "PROXIMAMENTE";
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  availability: "DISPONIBLE" | "AGOTADO" | "PROXIMAMENTE";
} 

export interface UpdateProductRequest {
  name?: string;
  description?: string;
  category?: string;
  price?: number;
  stock?: number;
  imageUrl?: string;
  availability?: "DISPONIBLE" | "AGOTADO" | "PROXIMAMENTE";
}   

export interface SortOBject {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface PageableObject<T> {
  content: T[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: SortOBject;
  unpaged: boolean;
}

export interface PageProductsResponse extends PageableObject<Product> {
  totalPages: number;
  totalElements: number;
  pageable: PageableObject<Product>;
  size: number;
  content: Product[];
  number: number;
  sort: SortOBject;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
