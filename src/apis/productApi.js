import { api } from "../configs/axiosConfig";

export const getProductDetail = async (productId) => (await api.get(`/products/${productId}`)).data;

export const getProductList = async (params) => (await api.get("/products", { params })).data;