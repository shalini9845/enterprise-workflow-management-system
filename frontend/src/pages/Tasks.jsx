import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/task";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Tasks() {
   const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

const loadTasks = async () => {
    try {
        const response = await getTasks();
        const data = await response.json();
        setTasks(data);
    } catch (error) {
        console.error("Error loading tasks:", error);
        setError("Unable to load tasks");
    } finally {
        setLoading(false);
    }
};
const handleDelete = async (id) => {
    try {
        const response = await deleteTask(id);

        if (!response.ok) {
            throw new Error("Task deletion failed");
        }

        alert("Task deleted successfully!");

        loadTasks();

    } catch (error) {
        console.error("Error deleting task:", error);
        alert("Task deletion failed!");
    }
};

    if (loading) {
        return <h2>Loading tasks...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h1>Tasks</h1>
       <TaskForm
    taskToEdit={editingTask}
    onTaskSaved={loadTasks}
/>

            {tasks.length === 0 ? (
                <p>No tasks found</p>
            ) : (
               tasks.map((task) => (
   <TaskCard 
    key={task.id} 
    task={task} 
    onEdit={(task) => setEditingTask(task)}
    onDelete={handleDelete}
/>
))
            )}
        </div>
    );
}

export default Tasks;