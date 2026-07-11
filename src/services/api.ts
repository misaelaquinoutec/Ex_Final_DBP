import type { loginRequest, RegisterRequest, AuthResponse, Product, postPoductRequest, UpdateProductRequest, PageProductsResponse } from "../types/types.tsx";

const API_BASE_URL = "https://cs2031-2026-1-pc2-techstore-production.up.railway.app";
const AuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export const apiservises = {
    async login(data: loginRequest): Promise<AuthResponse> {
        return fetch( `${API_BASE_URL}/auth/login` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud de inicio de sesión");
            }
            return response.json();
        });
    },

    async register(data: RegisterRequest): Promise<AuthResponse> {
        return fetch( `${API_BASE_URL}/auth/register` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud de registro");
            }
            return response.json();
        });
    },

    async getProducts(page: number = 0, size: number = 10): Promise<PageProductsResponse> {
        return fetch( `${API_BASE_URL}/products?page=${page}&size=${size}` , {
            method: "GET",
            headers: AuthHeaders(),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener los productos");
            }
            return response.json();
        }); 
    },

    async getProductById(id: string): Promise<Product> {
        return fetch( `${API_BASE_URL}/products/${id}` , {
            method: "GET",
            headers: AuthHeaders(),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener el producto");
            }
            return response.json();
        });
    },

    async createProduct(data: postPoductRequest): Promise<Product> {
        return fetch( `${API_BASE_URL}/products` , {
            method: "POST",
            headers: AuthHeaders(),
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al crear el producto");
            }
            return response.json();
        });
    },

    async updateProduct(id: string, data: UpdateProductRequest): Promise<Product> {
        return fetch( `${API_BASE_URL}/products/${id}` , {
            method: "PUT",
            headers: AuthHeaders(),
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al actualizar el producto");
            }
            return response.json();
        });
    },

    async deleteProduct(id: string): Promise<void> {
        return fetch( `${API_BASE_URL}/products/${id}` , {
            method: "DELETE",
            headers: AuthHeaders(),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al eliminar el producto");
            }
        });
    },
}
