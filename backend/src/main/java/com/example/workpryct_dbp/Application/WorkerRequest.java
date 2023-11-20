package com.example.workpryct_dbp.Application;

import com.example.workpryct_dbp.Domain.User;
import com.example.workpryct_dbp.Domain.Worker;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkerRequest {
    private User user;
    private Worker worker;
}