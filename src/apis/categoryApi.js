import { api } from "../configs/axiosConfig";

export const getCategoryList = async () => (await api.get("/categories")).data;