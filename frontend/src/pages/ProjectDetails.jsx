import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/projectService";
import { getTasksByProjectId } from "../services/task";
import CommentSection from "../components/CommentSection";

function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {

        const loadProject = async () => {

            try {

                const data = await getProjectById(id);

                setProject(data);

                const taskResponse = await getTasksByProjectId(id);

               const taskData = await taskResponse.json();

                setTasks(taskData);

            } catch (error) {

                console.error(error);
                setMessage("Unable to load project");

            }

        };

        loadProject();

    }, [id]);

    if (message) {
        return <p>{message}</p>;
    }

    if (!project) {
        return <p>Loading project...</p>;
    }

    return (
        <div style={{
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px"
}}>

            <h2 style={{
    marginBottom: "5px",
    fontSize: "28px"
}}>Project Details</h2>

            <h3 style={{
    fontSize: "22px",
    marginBottom: "15px"
      }}>{project.name}</h3>

            <p style={{
    marginBottom: "10px"
                    }}>
                <strong>Description:</strong> {project.description}
            </p>

            <p style={{
            marginBottom: "10px"
               }}>
                <strong>Status:</strong> {project.status}
            </p>

            <p  style={{
           marginBottom: "10px"
             }}>
               <strong>Start Date:</strong> {project.startDate}
            </p>

            <p style={{
    marginBottom: "10px"
                   }}>
                <strong>End Date:</strong> {project.endDate}
            </p>

            <hr />

<h3 style={{
    marginTop: "30px",
    marginBottom: "15px",
    fontSize: "22px"
}}>Related Tasks</h3>

{tasks.length === 0 ? (
    <p>No tasks found for this project.</p>
) : (
    tasks.map((task) => (
        <div key={task.id} style={{
        marginBottom: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff"
    }}>

            <h4 style={{
    marginTop: "0",
    marginBottom: "12px",
    fontSize: "20px"
     }}>{task.title}</h4>

            <p style={{
    marginBottom: "10px"
           }}>
                <strong>Description:</strong> {task.description}
            </p>

            <p style={{
    marginBottom: "10px"
        }}>
                  <strong>Status:</strong> {task.status}
            </p>

            <p style={{
    marginBottom: "10px"
           }}>
                <strong>Priority:</strong> {task.priority}
            </p>

            <p style={{
    marginBottom: "10px"
             }}>
                 <strong>Due Date:</strong> {task.dueDate}
            </p>

            <CommentSection taskId={task.id} />

            <hr />

        </div>
    ))
)}

        </div>
    );
}

export default ProjectDetails;