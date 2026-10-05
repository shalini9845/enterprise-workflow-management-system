package com.workflow.backend.service;

import com.workflow.backend.entity.Task;
import com.workflow.backend.repository.TaskRepository;
import com.workflow.backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
public TaskService(TaskRepository taskRepository,
                   ProjectRepository projectRepository) {
    this.taskRepository = taskRepository;
    this.projectRepository = projectRepository;
}
    public Task createTask(Task task) {

    if (task.getProject() != null && task.getProject().getId() != null) {

        Long projectId = task.getProject().getId();

        var project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        task.setProject(project);
    }

    return taskRepository.save(task);
}
   
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByProjectId(Long projectId) {
   return taskRepository.findByProject_Id(projectId);
}

    
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task updateTask(Long id, Task updatedTask) {

    Task existingTask = taskRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found"));

    existingTask.setTitle(updatedTask.getTitle());
    existingTask.setDescription(updatedTask.getDescription());
    existingTask.setStatus(updatedTask.getStatus());
    existingTask.setPriority(updatedTask.getPriority());
    existingTask.setDueDate(updatedTask.getDueDate());

    if (updatedTask.getProject() != null &&
            updatedTask.getProject().getId() != null) {

        Long projectId = updatedTask.getProject().getId();

        var project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        existingTask.setProject(project);
    }

    return taskRepository.save(existingTask);
}

   
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
