import { useEffect, useState } from "react";
import { getAllProjects, deleteProject } from "../services/projectService";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState("");
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {

        loadProjects();

    }, []);

    const loadProjects = async () => {

        try {

            const data = await getAllProjects();

            setProjects(data);

        } catch (error) {

            console.error(error);
            setMessage("Unable to load projects");

        }
    };

    const handleProjectCreated = (newProject) => {

        setProjects((previousProjects) => [
            ...previousProjects,
            newProject
        ]);

    };

    const handleProjectUpdated = (updatedProject) => {

        setProjects((previousProjects) =>
            previousProjects.map((project) =>
                project.id === updatedProject.id
                    ? updatedProject
                    : project
            )
        );

        setEditingProject(null);

    };

    const handleDelete = async (id) => {

        try {

            await deleteProject(id);

            setProjects((previousProjects) =>
                previousProjects.filter(
                    (project) => project.id !== id
                )
            );

            alert("Project deleted successfully!");

        } catch (error) {

            console.error(error);
            alert("Project deletion failed!");

        }
    };

    const handleEdit = (project) => {

        setEditingProject(project);

    };

    return (
        <div>

            <ProjectForm
                onProjectCreated={handleProjectCreated}
                editingProject={editingProject}
                onProjectUpdated={handleProjectUpdated}
            />

            <hr />

            <h2>Projects</h2>

            {message && <p>{message}</p>}

            {projects.length === 0 ? (

                <p>No projects found</p>

            ) : (

                projects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                ))

            )}

        </div>
    );
}

export default Projects;