package com.psl.training.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import com.psl.training.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
