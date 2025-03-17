import { api } from "../configs/axiosConfig";

export const getTestMessage = async () => (await api.get("/test")).data;

export const updateNameApi = async (name) => await api.post("/test/name", {name});