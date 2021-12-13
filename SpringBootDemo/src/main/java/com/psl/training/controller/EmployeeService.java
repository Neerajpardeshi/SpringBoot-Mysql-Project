package com.psl.training.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.training.entities.Employee;

@Service //interacts with repository
public class EmployeeService
{
	//perform CRUD operations here 
	//eg insert update delete fetch etc
	
	@Autowired
	EmployeeRepository emprepo;
	
	public void insertinTable(Employee emp)
	{
		emprepo.save(emp);
	}
	public void deletefromTable(Long emp)
	{
		emprepo.deleteById(emp);
	}
	public void updateTable(Employee emp)
	{
		emprepo.save(emp);
	}
	public Employee getEmployeeById(Long empid)
	{
		return emprepo.findById(empid).orElse(new Employee((long) 100, "SystemName", LocalDate.now(), null));
	}
	public List<Employee> getAllEmp()
	{
		return emprepo.findAll();
	}
}
