import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import joblib
import os

def load_model(model_path='models/personality_model.joblib'):
    """
    Load the trained model from disk
    """
    if os.path.exists(model_path):
        return joblib.load(model_path)
    return None

def process_input(personality_scores):
    """
    Process the input personality scores for prediction
    """
    # Convert dictionary to DataFrame
    df = pd.DataFrame([personality_scores])
    
    # Scale the features
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(df)
    
    return scaled_features

def get_career_recommendations(personality_scores, model=None):
    """
    Get career recommendations based on personality scores
    """
    # Default recommendations if no model is available
    default_recommendations = {
        "Openness": ["Research Scientist", "Artist", "Writer", "Software Developer"],
        "Conscientiousness": ["Project Manager", "Accountant", "Data Analyst", "Quality Assurance"],
        "Extraversion": ["Sales Representative", "Human Resources", "Public Relations", "Event Planner"],
        "Agreeableness": ["Counselor", "Teacher", "Healthcare Professional", "Customer Service"],
        "Neuroticism": ["Data Entry", "Librarian", "Technical Writer", "Research Assistant"]
    }
    
    if model is None:
        # Return recommendations based on highest scores
        sorted_traits = sorted(personality_scores.items(), key=lambda x: x[1], reverse=True)
        return {trait: default_recommendations[trait] for trait, _ in sorted_traits[:2]}
    
    # Process input and get model predictions
    processed_input = process_input(personality_scores)
    predictions = model.predict(processed_input)
    
    return predictions

def calculate_personality_insights(personality_scores):
    """
    Calculate insights based on personality scores
    """
    insights = []
    
    for trait, score in personality_scores.items():
        if score >= 4:
            insights.append(f"High {trait}: You show strong {trait.lower()} traits, which can be valuable in roles requiring {trait.lower()}.")
        elif score <= 2:
            insights.append(f"Low {trait}: You tend to be less {trait.lower()}, which might make you more suitable for roles that don't heavily rely on this trait.")
    
    return insights 