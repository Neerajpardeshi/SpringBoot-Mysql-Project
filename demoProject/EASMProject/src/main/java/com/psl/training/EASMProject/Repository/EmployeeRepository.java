package com.psl.training.EASMProject.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.psl.training.EASMProject.Entity.EmployeeData;

@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeData, Integer>{
	
}
