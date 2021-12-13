package com.psl.training.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Controller
//@ResponseBody
@RestController
public class HelloController 
{
	//http://localhost:9091/hello?user1=Neeraj
	@GetMapping("/hello")
	public String sayHello(@RequestParam(name = "user1",defaultValue = "DefaultName", required = false) String user) 
	{
		return "Welcome "+user+" to Spring Boot from RestController";
	}
	
	//http://localhost:9091/greet/noon
	@GetMapping("/greet/{msg}")
	public String greeting(@PathVariable("msg") String message,@RequestHeader("apikey") String apikey)
	{
		if(!apikey.equals("abc1234"))
			return "You r not registered user";
		
		String msg = "hello";
		if(message.equals("morning"))
			msg+=" Good Morning!";
		if(message.equals("noon"))
			msg+=" Good Afternoon!";
		if(message.equals("eve"))
			msg+=" Good Evening!";
		return msg;
	}
}
