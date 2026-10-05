import { apiRequest } from "./api";

export const getTasks = () => {
    return apiRequest("/api/tasks");
};

export const getTasksByProjectId = (projectId) => {
    return apiRequest(`/api/tasks/project/${projectId}`);
};

export const getTaskById = (id) => {
    return apiRequest(`/api/tasks/${id}`);
};

export const createTask = (task) => {
    return apiRequest("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task)
    });
};

export const updateTask = (id, task) => {
    return apiRequest(`/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(task)
    });
};

export const deleteTask = (id) => {
    return apiRequest(`/api/tasks/${id}`, {
        method: "DELETE"
    });
};