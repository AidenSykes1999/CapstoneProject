package com.capstone.foodiespringboot.controller.admin;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.foodiespringboot.dto.DishDto;
import com.capstone.foodiespringboot.services.admin.admindish.AdminDishService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminDishController {
	
	private final AdminDishService adminDishService;
	
	@PostMapping("/dish")
	 public ResponseEntity<DishDto> addDish(@ModelAttribute DishDto dishDto) throws IOException{
	 DishDto dishDto1 = adminDishService.addDish(dishDto);
	 return ResponseEntity.status(HttpStatus.CREATED).body(dishDto1);
	 }
	
	@GetMapping("/dishes")
	public ResponseEntity<List<DishDto>> getAllDishes(){
		List<DishDto> dishDtos = adminDishService.getAllDishes();
		return ResponseEntity.ok(dishDtos);
	}
	
	@GetMapping("/search/{name}")
	public ResponseEntity<List<DishDto>> getAllDishesByName(@PathVariable String name){
		List<DishDto> dishDtos = adminDishService.getAllDishesByName(name);
		return ResponseEntity.ok(dishDtos);
	}
	

}
