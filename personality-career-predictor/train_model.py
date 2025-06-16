import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import joblib
import os
import seaborn as sns
import matplotlib.pyplot as plt

def load_and_preprocess_data():
    """
    Load and preprocess the real datasets
    """
    # Load personality data
    personality_df = pd.read_csv('data/personality_data.csv')
    
    # Load career data
    career_df = pd.read_csv('data/career_data.csv')
    
    # Create broader career categories based on personality traits
    def assign_career_category(row):
        # Define thresholds for each trait
        high_openness = row['Openness'] > 3.5
        high_conscientiousness = row['Conscientiousness'] > 3.5
        high_extraversion = row['Extraversion'] > 3.5
        high_agreeableness = row['Agreeableness'] > 3.5
        low_neuroticism = row['Neuroticism'] < 2.5
        
        # Create career categories based on trait combinations
        if high_openness and high_conscientiousness:
            return 'Analytical'
        elif high_extraversion and high_agreeableness:
            return 'Social'
        elif high_conscientiousness and low_neuroticism:
            return 'Organizational'
        elif high_openness and high_extraversion:
            return 'Creative'
        else:
            return 'Balanced'
    
    # Apply the career category assignment
    personality_df['Career_Category'] = personality_df.apply(assign_career_category, axis=1)
    
    # Print distribution of career categories
    print("\nCareer Category Distribution:")
    print(personality_df['Career_Category'].value_counts())
    
    return personality_df

def train_model():
    """
    Train the personality prediction model using real data
    """
    # Create models directory if it doesn't exist
    if not os.path.exists('models'):
        os.makedirs('models')
    
    # Load and preprocess data
    df = load_and_preprocess_data()
    
    # Prepare features and target
    X = df.drop(['Career_Category'], axis=1)
    y = df['Career_Category']
    
    # Split the data without stratification
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train the model with balanced class weights
    model = RandomForestClassifier(
        n_estimators=200,
        max_depth=10,
        min_samples_split=5,
        min_samples_leaf=2,
        class_weight='balanced',
        random_state=42
    )
    model.fit(X_train_scaled, y_train)
    
    # Evaluate the model
    train_score = model.score(X_train_scaled, y_train)
    test_score = model.score(X_test_scaled, y_test)
    
    print(f"\nModel Performance:")
    print(f"Training accuracy: {train_score:.2f}")
    print(f"Testing accuracy: {test_score:.2f}")
    
    # Generate and save classification report
    y_pred = model.predict(X_test_scaled)
    report = classification_report(y_test, y_pred, output_dict=True)
    report_df = pd.DataFrame(report).transpose()
    report_df.to_csv('models/classification_report.csv')
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))
    
    # Generate and save confusion matrix plot
    plt.figure(figsize=(10, 8))
    cm = confusion_matrix(y_test, y_pred)
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
                xticklabels=model.classes_,
                yticklabels=model.classes_)
    plt.title('Confusion Matrix')
    plt.ylabel('True Label')
    plt.xlabel('Predicted Label')
    plt.tight_layout()
    plt.savefig('models/confusion_matrix.png')
    plt.close()
    
    # Save feature importance plot
    feature_importance = pd.DataFrame({
        'feature': X.columns,
        'importance': model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    plt.figure(figsize=(10, 6))
    sns.barplot(x='importance', y='feature', data=feature_importance)
    plt.title('Feature Importance')
    plt.tight_layout()
    plt.savefig('models/feature_importance.png')
    plt.close()
    
    # Save the model and scaler
    joblib.dump(model, 'models/personality_model.joblib')
    joblib.dump(scaler, 'models/scaler.joblib')
    
    return model, scaler

if __name__ == "__main__":
    train_model() 