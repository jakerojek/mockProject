package com.jake.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jake.restaurant.entity.FoodEntity;

public interface FoodRepository extends JpaRepository<FoodEntity, Integer>{

}
