package com.psl.training.EASMProject.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.training.EASMProject.Entity.EmployeeData;
import com.psl.training.EASMProject.Service.EmployeeService;

@RestController
public class EmployeeController 
{
	@Autowired
	private EmployeeService service;
	
	
	//create api to insert data in table
	@PostMapping("/insert")
	public String insertData(@RequestBody EmployeeData data) 
	{
		service.saveData(data);
		return "Employee "+data.getFirstname()+" registered successfully";
	}
	
	//create api to update data in table
	@PutMapping("/update")
	public String updateData(@RequestBody EmployeeData data) {
		service.updateData(data);
		return "Employee "+data.getFirstname()+" updated successfully";
	}
	
	//create api to show all employees
	@GetMapping("/allemps")
	public Iterable<EmployeeData> showAllEmployees()
	{
		return service.showAllEmp();
	}
	
	//create api to delete record from table
	@DeleteMapping("/delete/{id}")
	public Iterable<EmployeeData> deleteEmployee(@PathVariable int id)
	{
		return service.deleteEmp(id);
	}
	
	//create api to search record in table
	@GetMapping("/search/{id}")
	public Optional<EmployeeData> search(@PathVariable int id) {
		return service.searchEmp(id);
	}
}
