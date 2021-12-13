package com.psl.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.psl.training.entities.Employee;

@RestController
public class EmployeeController 
{
	@Autowired
	EmployeeService service;
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees()
	{
		return service.getAllEmp();
	}
	
	@GetMapping("/employee/{empid}")
	public Employee getEmpById(@PathVariable("empid") long empid)
	{
		return service.getEmployeeById(empid);
	}
	
	//to insert use post
	@PostMapping("/employee")
	public String addEmployee(@RequestBody Employee emp)
	{
		service.insertinTable(emp);
		return "Data inserted successfully";
	}
	
	@PutMapping("/employee")
	public String UpdateEmployee(@RequestBody Employee emp)
	{
		service.updateTable(emp);
		return "Data updated successfully";
	}
	
	@DeleteMapping("/employee/{empid}")
	public String deleteEmpById(@PathVariable("empid") long empid)
	{
		service.deletefromTable(empid);
		return "Data deleted successfully";
	}
}