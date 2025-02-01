package com.capstone.foodiespringboot.dto;

import lombok.Data;

@Data
public class DishDto {
	
	private Long id;

	private String name;

	private Float price;
	
	private Long restaurantId;
	
	private String restaurantName;
	

}
