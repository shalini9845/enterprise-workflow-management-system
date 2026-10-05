const API_BASE_URL = "http://localhost:8081";

export const apiRequest = async (url, options = {}) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,

        headers: {
            "Content-Type": "application/json",
            ...options.headers,
            ...(token && {
                "Authorization": `Bearer ${token}`
            })
        }
    });

   if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", response.status, errorText);
    throw new Error(`API request failed: ${response.status}`);
}
    return response;
};

export default API_BASE_URL;