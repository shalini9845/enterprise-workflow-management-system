package com.workflow.backend.service;

import com.workflow.backend.entity.Comment;
import com.workflow.backend.entity.Task;
import com.workflow.backend.repository.CommentRepository;
import com.workflow.backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;

    public CommentService(CommentRepository commentRepository,
                          TaskRepository taskRepository) {
        this.commentRepository = commentRepository;
        this.taskRepository = taskRepository;
    }

    public Comment createComment(Long taskId, String content) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        Comment comment = new Comment();
        comment.setContent(content);
        comment.setTask(task);

        return commentRepository.save(comment);
    }

    public List<Comment> getCommentsByTask(Long taskId) {
        return commentRepository.findByTaskId(taskId);
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}
