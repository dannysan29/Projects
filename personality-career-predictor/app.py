import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import joblib
from utils import load_model, process_input

# Set page config
st.set_page_config(
    page_title="Personality Career Predictor",
    page_icon="🧠",
    layout="wide"
)

# Title and description
st.title("🧠 Personality Analysis & Career Path Predictor")
st.markdown("""
This tool analyzes your personality traits and suggests potential career paths that might be a good fit for you.
The analysis is based on the Big Five personality traits model, which is widely used in psychological research.
""")

# Sidebar for personality assessment
st.sidebar.header("Personality Assessment")
st.sidebar.markdown("""
Rate yourself on a scale of 1-5 for each trait:
- 1: Strongly disagree / Not at all like me
- 2: Disagree / Slightly like me
- 3: Neutral / Somewhat like me
- 4: Agree / Mostly like me
- 5: Strongly agree / Very much like me
""")

# Big Five personality traits with detailed descriptions
traits = {
    "Openness": "How open are you to new experiences and ideas? (e.g., creativity, curiosity, appreciation for art)",
    "Conscientiousness": "How organized and responsible are you? (e.g., self-discipline, carefulness, thoroughness)",
    "Extraversion": "How outgoing and social are you? (e.g., sociability, talkativeness, assertiveness)",
    "Agreeableness": "How cooperative and compassionate are you? (e.g., trust, altruism, kindness)",
    "Neuroticism": "How sensitive are you to stress and negative emotions? (e.g., anxiety, moodiness, emotional stability)"
}

# Create sliders for each trait
personality_scores = {}
for trait, description in traits.items():
    st.sidebar.markdown(f"**{trait}**")
    st.sidebar.markdown(f"*{description}*")
    personality_scores[trait] = st.sidebar.slider(
        f"{trait} Score",
        min_value=1,
        max_value=5,
        value=3,
        key=trait
    )

# Main content area
if st.sidebar.button("Analyze Personality & Predict Career Path"):
    # Convert scores to DataFrame
    scores_df = pd.DataFrame([personality_scores])
    
    # Create personality radar chart
    fig = px.line_polar(
        scores_df,
        r=[scores_df[col].iloc[0] for col in traits.keys()],
        theta=list(traits.keys()),
        line_close=True,
        range_r=[0, 5]
    )
    
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 5]
            )
        ),
        showlegend=False
    )
    
    # Display results with explanation
    st.header("Your Personality Profile")
    st.markdown("""
    ### Understanding Your Personality Profile
    The radar chart above shows your scores for each of the Big Five personality traits:
    - Each axis represents one personality trait
    - The distance from the center (0) to the edge (5) shows your score for that trait
    - The shape of the chart shows your unique personality pattern
    - A larger area generally indicates a more pronounced personality profile
    """)
    st.plotly_chart(fig)
    
    # Display career recommendations
    st.header("Career Path Recommendations")
    
    # Example career recommendations based on personality traits
    recommendations = {
        "Openness": ["Research Scientist", "Artist", "Writer", "Software Developer"],
        "Conscientiousness": ["Project Manager", "Accountant", "Data Analyst", "Quality Assurance"],
        "Extraversion": ["Sales Representative", "Human Resources", "Public Relations", "Event Planner"],
        "Agreeableness": ["Counselor", "Teacher", "Healthcare Professional", "Customer Service"],
        "Neuroticism": ["Data Entry", "Librarian", "Technical Writer", "Research Assistant"]
    }
    
    # Display recommendations based on highest scores
    top_traits = sorted(personality_scores.items(), key=lambda x: x[1], reverse=True)[:2]
    
    st.subheader("Based on your personality profile, you might excel in:")
    for trait, score in top_traits:
        st.markdown(f"**{trait} (Score: {score}/5)**")
        for career in recommendations[trait]:
            st.markdown(f"- {career}")
    
    # Add personality insights
    st.header("Personality Insights")
    for trait, score in personality_scores.items():
        if score >= 4:
            st.success(f"High {trait}: You show strong {trait.lower()} traits, which can be valuable in roles requiring {trait.lower()}.")
        elif score <= 2:
            st.info(f"Low {trait}: You tend to be less {trait.lower()}, which might make you more suitable for roles that don't heavily rely on this trait.")

# Footer
st.markdown("---")
st.markdown("""
This tool is for educational and entertainment purposes only. Career choices should be based on multiple factors, 
including interests, skills, values, and market opportunities. Always consult with career counselors or professionals 
for serious career decisions.
""") 