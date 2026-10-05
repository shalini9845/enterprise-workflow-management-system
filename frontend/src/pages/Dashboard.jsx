import { useEffect, useState } from "react";
import { getProjects } from "../services/project";
import { getTasks } from "../services/task";
import { apiRequest } from "../services/api";

function Dashboard() {

    const [message, setMessage] = useState("");
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {

    const loadDashboardData = async () => {

        try {

            const projectsResponse = await getProjects();
            const projectsData = await projectsResponse.json();

            const tasksResponse = await getTasks();
            const tasksData = await tasksResponse.json();

            setProjects(projectsData);
            setTasks(tasksData);

        } catch (error) {

            console.error("Error loading dashboard data:", error);

        }

    };

    loadDashboardData();

}, []);

    const testProtectedApi = async () => {

        try {

            const response = await apiRequest("/api/test");

            const data = await response.text();

            setMessage(data);

        } catch (error) {

            console.error(error);
            setMessage("Access denied!");

        }
    };
    const todoTasks = tasks.filter(
    (task) => task.status === "TODO"
).length;

const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS"
).length;

const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETED"
).length;

    return (
        <div>

            <h2>Dashboard</h2>
            <p>
    <strong>Total Projects:</strong> {projects.length}
    </p>
    <p>
    <strong>Total Tasks:</strong> {tasks.length}
    </p>
    <p>
    <strong>TODO Tasks:</strong> {todoTasks}
</p>

<p>
    <strong>In Progress Tasks:</strong> {inProgressTasks}
</p>

<p>
    <strong>Completed Tasks:</strong> {completedTasks}
</p>

            <button onClick={testProtectedApi}>
                Test Protected API
            </button>

            <p>{message}</p>

        </div>
    );
}

export default Dashboard;