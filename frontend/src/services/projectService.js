import { apiRequest } from "./api";

export const createProject = async (project) => {

    const response = await apiRequest("/api/projects", {
        method: "POST",
        body: JSON.stringify(project)
    });

    return await response.json();
};

export const getAllProjects = async () => {

    const response = await apiRequest("/api/projects");

    return await response.json();
};

export const getProjectById = async (id) => {

    const response = await apiRequest(`/api/projects/${id}`);

    return await response.json();
};

export const updateProject = async (id, project) => {

    const response = await apiRequest(`/api/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(project)
    });

    return await response.json();
};

export const deleteProject = async (id) => {

    const response = await apiRequest(`/api/projects/${id}`, {
        method: "DELETE"
    });

    return await response.text();
};