export const getProjects = async () => {
    const token = localStorage.getItem("token");

    return fetch("http://localhost:8081/api/projects", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
};