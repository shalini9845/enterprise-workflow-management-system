import React, { useEffect, useState } from "react";
import { getProjects } from "../services/project";
import { createTask, updateTask } from "../services/task";

const TaskForm = ({ taskToEdit, onTaskSaved }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("TODO");
    const [priority, setPriority] = useState("MEDIUM");
    const [dueDate, setDueDate] = useState("");

    const [projects, setProjects] = useState([]);
    const [projectId, setProjectId] = useState("");

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title || "");
            setDescription(taskToEdit.description || "");
            setStatus(taskToEdit.status || "TODO");
            setPriority(taskToEdit.priority || "MEDIUM");
            setDueDate(taskToEdit.dueDate || "");
            setProjectId(taskToEdit.project?.id || "");
        }
    }, [taskToEdit]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await getProjects();

                if (!response.ok) {
                    throw new Error("Unable to load projects");
                }

                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error loading projects:", error);
            }
        };

        loadProjects();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const task = {
                title,
                description,
                status,
                priority,
                dueDate,
                project: {
                    id: projectId
                }
            };

            console.log(task);

            let response;

            if (taskToEdit) {
                response = await updateTask(taskToEdit.id, task);
            } else {
                response = await createTask(task);
            }

            if (!response.ok) {
                throw new Error(
                    taskToEdit
                        ? "Task update failed"
                        : "Task creation failed"
                );
            }

            alert(
                taskToEdit
                    ? "Task updated successfully!"
                    : "Task created successfully!"
            );

            if (onTaskSaved) {
                onTaskSaved();
            }

        } catch (error) {
            console.error("Error saving task:", error);
            alert("Task save failed!");
        }
    };

    return (
        <div  style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
    }}>
            <h2   style={{
        marginTop: "0",
        marginBottom: "20px"
    }}>{taskToEdit ? "Edit Task" : "Create Task"}</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label
                     style={{
                  display: "block",
                  marginBottom: "6px",
                   fontWeight: "bold"
                   }}
                    >Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        required
                         style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px"
    }}
                    />
                </div>

                <br />

                <div>
                    <label  style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                        required
                         style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px",
        resize: "vertical"
    }}
                    />
                </div>

                <br />

                <div>
                    <label  style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Project:</label>

                    <select
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        required
                        style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px"
    }}
                    >
                        <option value="">Select Project</option>

                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                </div>

                <br />

                <div>
                    <label  style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Status:</label>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                         style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px"
    }}
                    >
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>

                <br />

                <div>
                    <label style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Priority:</label>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px"
    }}
                    >
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>
                </div>

                <br />

                <div>
                    <label  style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Due Date:</label>

                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                         style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "6px"
    }}
                    />
                </div>

                <br />

                <button type="submit"  
                 style={{
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "15px"
    }}
                >
                    {taskToEdit ? "Update Task" : "Create Task"}
                </button>

            </form>
        </div>
    );
};

export default TaskForm;