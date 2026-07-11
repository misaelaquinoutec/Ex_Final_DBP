import { loginRequest, RegisterRequest, AuthResponse, Product, postPoductRequest, UpdateProductRequest } from "../types/types.tsx";

const API_BASE_URL = "";
const get AuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export const apiservises = {
    async login(data: loginRequest): Promise<AuthResponse> {
        return fetch( "" , {
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
        return fetch( "" , {
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

    async getProducts(): Promise<Product[]> {
        return fetch( "" , {
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
    }

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
},
