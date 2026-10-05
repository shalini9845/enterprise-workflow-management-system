import React, { useEffect, useState } from "react";
import {
    getCommentsByTask,
    createComment,
    deleteComment
} from "../services/comment";

const CommentSection = ({ taskId }) => {

    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadComments = async () => {
        try {
            const response = await getCommentsByTask(taskId);
            const data = await response.json();

            setComments(data);
            setLoading(false);

        } catch (error) {
            console.error("Error loading comments:", error);
            setError("Unable to load comments.");
            setLoading(false);
        }
    };

    useEffect(() => {
        loadComments();
    }, [taskId]);

    const handleAddComment = async () => {

        if (!content.trim()) {
            return;
        }

        try {
            await createComment(taskId, content);

            setContent("");

            loadComments();

        } catch (error) {
            console.error("Error creating comment:", error);
        }
    };

    const handleDeleteComment = async (id) => {

        try {
            await deleteComment(id);

            loadComments();

        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    return (
        <div
            style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9"
            }}
        >

            <h3
                style={{
                    marginTop: "0",
                    marginBottom: "15px"
                }}
            >
                Comments
            </h3>
             
             {error && <p>{error}</p>}

            {loading ? (
                <p>Loading comments...</p>
            ) : (
                comments.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            style={{
                                marginBottom: "12px",
                                padding: "12px",
                                backgroundColor: "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "6px"
                            }}
                        >

                            <p
                                style={{
                                    marginTop: "0",
                                    marginBottom: "10px"
                                }}
                            >
                                {comment.content}
                            </p>

                            <button
                                onClick={() => handleDeleteComment(comment.id)}
                                style={{
                                    padding: "6px 12px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}
                            >
                                Delete
                            </button>

                        </div>
                    ))
                )
            )}

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a comment..."
                rows="3"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    boxSizing: "border-box",
                    resize: "vertical"
                }}
            />

            <br />

            <button
                onClick={handleAddComment}
                style={{
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                Add Comment
            </button>

        </div>
    );
};

export default CommentSection;