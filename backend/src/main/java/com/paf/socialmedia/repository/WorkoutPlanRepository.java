package com.paf.socialmedia.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.paf.socialmedia.entity.WorkoutPlan;

public interface WorkoutPlanRepository extends MongoRepository<WorkoutPlan, String> {
    List<WorkoutPlan> findByUserId(String userId);
}
