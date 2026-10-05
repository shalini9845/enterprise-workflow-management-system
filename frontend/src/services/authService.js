import { apiRequest } from "./api";

export const registerUser = (userData) => {
    return apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData)
    });
};

export const loginUser = (userData) => {
    return apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userData)
    });
}