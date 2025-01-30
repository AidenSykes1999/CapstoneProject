package com.capstone.foodiespringboot.dto;

import com.capstone.foodiespringboot.enums.UserRole;

import lombok.Data;

@Data
public class UserDto {
	
	private Long id;
	
	private String email;
	
	private String name;
	
	private UserRole userRole;

}
