import pandas as pd
import numpy as np
import requests
import os
from zipfile import ZipFile
from io import BytesIO

def download_big5_dataset():
    """
    Download the Big Five personality dataset from OpenPsychometrics
    """
    url = "https://openpsychometrics.org/_rawdata/BIG5.zip"
    response = requests.get(url)
    
    if response.status_code == 200:
        with ZipFile(BytesIO(response.content)) as zip_file:
            # Extract the data file
            data_file = [f for f in zip_file.namelist() if f.endswith('.csv')][0]
            # Specify tab separator
            df = pd.read_csv(zip_file.open(data_file), sep='\t')
            print("Available columns:", df.columns.tolist())
            trait_questions = {
                'Openness': ['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'O10'],
                'Conscientiousness': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
                'Extraversion': ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
                'Agreeableness': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
                'Neuroticism': ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'N10']
            }
            # Calculate trait scores
            for trait, questions in trait_questions.items():
                available_questions = [q for q in questions if q in df.columns]
                if available_questions:
                    df[trait] = df[available_questions].mean(axis=1)
                else:
                    print(f"Warning: No questions found for {trait}")
            # Normalize scores to 1-5 scale
            for trait in trait_questions.keys():
                if trait in df.columns:
                    df[trait] = ((df[trait] - df[trait].min()) / (df[trait].max() - df[trait].min()) * 4 + 1)
            trait_columns = [col for col in trait_questions.keys() if col in df.columns]
            return df[trait_columns]
    else:
        raise Exception("Failed to download Big Five dataset")

def load_local_career_dataset():
    """
    Load the O*NET Ability.txt file from the local data directory
    """
    local_path = os.path.join('data', 'Ability.txt')
    if os.path.exists(local_path):
        df = pd.read_csv(local_path, sep='\t', encoding='utf-8', low_memory=False)
        print(f"Loaded local career dataset with columns: {df.columns.tolist()}")
        return df
    else:
        raise Exception(f"Ability.txt not found in {local_path}. Please download it from O*NET and place it there.")

def combine_datasets():
    """
    Combine personality and career datasets
    """
    # Create data directory if it doesn't exist
    if not os.path.exists('data'):
        os.makedirs('data')
    
    try:
        # Download and process datasets
        personality_df = download_big5_dataset()
        career_df = load_local_career_dataset()
        
        # Save processed datasets
        personality_df.to_csv('data/personality_data.csv', index=False)
        career_df.to_csv('data/career_data.csv', index=False)
        
        print("Datasets downloaded and processed successfully!")
        return personality_df, career_df
    
    except Exception as e:
        print(f"Error downloading datasets: {str(e)}")
        return None, None

if __name__ == "__main__":
    combine_datasets() 