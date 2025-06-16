# Personality Analysis and Career Path Predictor

This project combines psychological data analysis with machine learning to predict potential career paths based on personality traits. It uses the Big Five personality traits (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism) to provide career recommendations.

## Features

- Personality trait analysis using the Big Five model
- Career path prediction based on personality traits
- Interactive web interface for user input
- Data visualization of personality traits and career correlations
- Machine learning model for accurate predictions

## Understanding Your Results

### Personality Profile
The personality profile is displayed as a radar chart with five axes, each representing one of the Big Five personality traits:

1. **Openness**: Measures your openness to new experiences, creativity, and intellectual curiosity
   - High scores: Creative, curious, open to new ideas
   - Low scores: Traditional, practical, focused on facts

2. **Conscientiousness**: Measures your level of organization, responsibility, and self-discipline
   - High scores: Organized, responsible, detail-oriented
   - Low scores: Flexible, spontaneous, less structured

3. **Extraversion**: Measures your level of sociability and energy
   - High scores: Outgoing, energetic, social
   - Low scores: Reserved, quiet, independent

4. **Agreeableness**: Measures your level of compassion and cooperation
   - High scores: Kind, cooperative, empathetic
   - Low scores: Direct, competitive, analytical

5. **Neuroticism**: Measures your emotional stability
   - High scores: Sensitive, emotional, prone to stress
   - Low scores: Calm, stable, resilient

### Interpreting the Radar Chart
- Each axis ranges from 1 (center) to 5 (outer edge)
- The shape of your profile shows your unique personality pattern
- A larger area generally indicates a more pronounced personality profile
- The distance from the center shows your score for each trait

### Career Recommendations
The system provides career recommendations based on your personality profile:
- Recommendations are based on your highest-scoring traits
- Each career suggestion is accompanied by an explanation of why it might be a good fit
- The system considers multiple trait combinations for more accurate suggestions

## Setup

1. Clone this repository
2. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Streamlit app:
   ```bash
   streamlit run app.py
   ```

## Project Structure

- `data/`: Contains the dataset and processed data
- `models/`: Saved machine learning models
- `notebooks/`: Jupyter notebooks for analysis
- `app.py`: Main Streamlit application
- `utils.py`: Utility functions
- `train_model.py`: Script for training the prediction model

## Data Sources

The project uses a combination of:
- Big Five personality traits dataset
- Career satisfaction survey data
- Professional success metrics

## Technologies Used

- Python
- Scikit-learn
- Streamlit
- Pandas
- NumPy
- Plotly
- Matplotlib
- Seaborn

## Note on Results Interpretation

This tool is designed for educational and entertainment purposes. While it provides insights based on psychological research, career choices should be based on multiple factors including:
- Personal interests and values
- Skills and education
- Market opportunities
- Work environment preferences
- Long-term career goals

Always consult with career counselors or professionals for serious career decisions. 