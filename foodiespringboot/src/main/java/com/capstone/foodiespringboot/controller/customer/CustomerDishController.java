package com.capstone.foodiespringboot.controller.customer;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.foodiespringboot.dto.DishDto;
import com.capstone.foodiespringboot.services.customer.CustomerDishService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerDishController {

	private final CustomerDishService customerDishService;
	
	
	@GetMapping("/dishes")
	public ResponseEntity<List<DishDto>> getAllDishes(){
		List<DishDto> dishDtos = customerDishService.getAllDishes();
		return ResponseEntity.ok(dishDtos);
	}
	
	@GetMapping("/search/{name}")
	public ResponseEntity<List<DishDto>> getAllDishesByName(@PathVariable String name){
		List<DishDto> dishDtos = customerDishService.searchDishByTitle(name);
		return ResponseEntity.ok(dishDtos);
	}
	
	
}
