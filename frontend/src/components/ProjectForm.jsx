import { useEffect, useState } from "react";
import { createProject, updateProject } from "../services/projectService";

function ProjectForm({ onProjectCreated, editingProject, onProjectUpdated }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("ACTIVE");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {

        if (editingProject) {

            setName(editingProject.name);
            setDescription(editingProject.description);
            setStatus(editingProject.status);
            setStartDate(editingProject.startDate);
            setEndDate(editingProject.endDate);

        }

    }, [editingProject]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const project = {
                name,
                description,
                status,
                startDate,
                endDate
            };

            if (editingProject) {

                const updatedProject = await updateProject(
                    editingProject.id,
                    project
                );

                alert("Project updated successfully!");

                onProjectUpdated(updatedProject);

            } else {

                const createdProject = await createProject(project);

                alert("Project created successfully!");

                onProjectCreated(createdProject);
            }

            setName("");
            setDescription("");
            setStatus("ACTIVE");
            setStartDate("");
            setEndDate("");

        } catch (error) {

            console.error(error);
            alert("Project operation failed!");

        }
    };

    return (
        <div style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
    }}>

            <h2  style={{
        marginTop: "0",
        marginBottom: "20px"
    }}>
                {editingProject
                    ? "Edit Project"
                    : "Create Project"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                     required
                     style={{
               width: "100%",
               padding: "10px",
               boxSizing: "border-box",
               border: "1px solid #ccc",
               borderRadius: "6px"
                }}
                />

                <br /><br />

                <textarea
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

                <br /><br />

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
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="ON_HOLD">ON HOLD</option>
                </select>

                <br /><br />

                <label  style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
    }}>Start Date:</label>

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                      style={{
             width: "100%",
             padding: "10px",
             boxSizing: "border-box",
             border: "1px solid #ccc",
              borderRadius: "6px"
               }}
                />

                <br /><br />

                <label>End Date:</label>

                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    required
                     style={{
               width: "100%",
              padding: "10px",
             boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "6px"
            }}
                />

                <br /><br />

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
                    {editingProject
                        ? "Update Project"
                        : "Create Project"}
                </button>

            </form>

        </div>
    );
}

export default ProjectForm;