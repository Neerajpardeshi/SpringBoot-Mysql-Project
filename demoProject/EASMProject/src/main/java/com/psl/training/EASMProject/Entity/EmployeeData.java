package com.psl.training.EASMProject.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee_details")
public class EmployeeData 
{
	@Id
	private int empid;
	private String emailId;
	private String firstname;
	private String lastname;
	private String dob;
	private String city;
	private String doj;
	
	public EmployeeData() {}

	public EmployeeData(int empid,String emailId ,String firstname, String lastname, String dob, String city, String doj) {
		super();
		this.empid = empid;
		this.emailId=emailId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = dob;
		this.city = city;
		this.doj = doj;
	}

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}
	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
	
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDoj() {
		return doj;
	}

	public void setDoj(String doj) {
		this.doj = doj;
	}
	
}
