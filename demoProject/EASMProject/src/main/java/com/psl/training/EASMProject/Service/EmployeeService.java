package com.psl.training.EASMProject.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.training.EASMProject.Entity.EmployeeData;
import com.psl.training.EASMProject.Repository.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	private EmployeeRepository repo;
	//insert
	public void saveData(EmployeeData data) 
	{
		repo.save(data);
	}
	//update
	public void updateData(EmployeeData data) {
		repo.save(data);
	}
	public Iterable<EmployeeData> showAllEmp() {
		return repo.findAll();
	}
	public Iterable<EmployeeData> deleteEmp(int id) {
		repo.deleteById(id);
		return repo.findAll();
	}
	public Optional<EmployeeData> searchEmp(int id) {
		 return repo.findById(id);
	}
}