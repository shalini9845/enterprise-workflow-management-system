import { Link } from "react-router-dom";

function ProjectCard({ project, onEdit, onDelete }) {

    return (
        <div>

            <h3>
                <Link to={`/projects/${project.id}`}>
                    {project.name}
                </Link>
            </h3>

            <p>{project.description}</p>

            <p>
                Status: {project.status}
            </p>

            <p>
                Start Date: {project.startDate}
            </p>

            <p>
                End Date: {project.endDate}
            </p>

            <button onClick={() => onEdit(project)}>
                Edit
            </button>

            <button onClick={() => onDelete(project.id)}>
                Delete
            </button>

            <hr />

        </div>
    );
}

export default ProjectCard;