package com.workflow.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @ManyToOne
    private Task task;

    public Comment() {
    }

    public Comment(String content, Task task) {
        this.content = content;
        this.task = task;
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public Task getTask() {
        return task;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}
