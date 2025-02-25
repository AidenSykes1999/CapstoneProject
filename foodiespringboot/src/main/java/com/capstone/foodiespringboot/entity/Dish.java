package com.capstone.foodiespringboot.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.capstone.foodiespringboot.dto.DishDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "dishes")
public class Dish {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private Float price;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "restaurant_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Restaurant restaurant;

	
	public DishDto getDto() {
		DishDto dishDto = new DishDto();
		dishDto.setId(id);
		dishDto.setName(name);
		dishDto.setPrice(price);
		dishDto.setRestaurantId(restaurant.getId());
		dishDto.setRestaurantName(restaurant.getName());
		return dishDto;

		
	}
	
}
