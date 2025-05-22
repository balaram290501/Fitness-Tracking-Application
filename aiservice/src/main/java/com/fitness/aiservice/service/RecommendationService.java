package com.fitness.aiservice.service;

import com.fitness.aiservice.model.Recommendation;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecommendationService {
    List<Recommendation> getUserRecommendation(String userId);

    Recommendation getActivityRecommendation(String activityId);
}
