import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {

    return (
        <div>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
                <strong>Status:</strong> {task.status}
            </p>

            <p>
                <strong>Priority:</strong> {task.priority}
            </p>

            <p>
                <strong>Due Date:</strong> {task.dueDate}
            </p>

            <p>
                <strong>Project:</strong>{" "}
                {task.project ? task.project.name : "No Project"}
            </p>

            <button onClick={() => onEdit(task)}>
                Edit
            </button>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
};

export default TaskCard;