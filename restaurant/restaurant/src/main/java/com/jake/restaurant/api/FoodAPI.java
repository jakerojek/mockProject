package com.jake.restaurant.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jake.restaurant.service.OrderService;

import java.util.List;

import com.jake.restaurant.entity.FoodEntity;
import com.jake.restaurant.exception.ItemNotFoundException;
import com.jake.restaurant.model.Food;
import com.jake.restaurant.repository.FoodRepository;

@RestController
@RequestMapping("FoodAPI")
public class FoodAPI {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private FoodRepository foodRepository;
	
	@GetMapping("/foodItems")
	List<FoodEntity> all(){
		return foodRepository.findAll();
		
	}
	
	@PostMapping("/foodItems")
	FoodEntity newFood(@RequestBody FoodEntity newFood) {
		return foodRepository.save(newFood);
	}
	
	@GetMapping("/foodItems/{id}")
	FoodEntity foodItem(@PathVariable Integer id) throws ItemNotFoundException {
		return foodRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
	}
	
	

}
