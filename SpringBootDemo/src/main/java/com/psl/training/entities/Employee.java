package com.psl.training.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Employee_Details")
public class Employee 
{
	@Id //represent the primary key of an entity
	private long empId;
	private String empname;
	private LocalDate date;
	private String email;
	
	
	
	public Employee() {
		super();
	}
	public Employee(Long empId, String empname, LocalDate date, String email) {
		super();
		this.empId = empId;
		this.empname = empname;
		this.date = date;
		this.email = email;
	}
	public Long getEmpId() {
		return empId;
	}
	public void setEmpId(Long empId) {
		this.empId = empId;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
