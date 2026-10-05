import { apiRequest } from "./api";

export const getCommentsByTask = (taskId) => {
    return apiRequest(`/api/comments/task/${taskId}`);
};

export const createComment = (taskId, content) => {
    return apiRequest(`/api/comments/task/${taskId}`, {
        method: "POST",
        body: JSON.stringify({
            content: content
        })
    });
};

export const deleteComment = (id) => {
    return apiRequest(`/api/comments/${id}`, {
        method: "DELETE"
    });
};