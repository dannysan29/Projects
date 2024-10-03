# Medical Data Visualizer

## Project Overview

The Medical Data Visualizer project is part of the freeCodeCamp Python curriculum. The goal of this project is to visualize and analyze medical examination data to explore the relationship between cardiac disease, body measurements, blood markers, and lifestyle choices. This is done using Python libraries like matplotlib, seaborn, and pandas.

## Dataset

The dataset used in this project was collected during medical examinations. Each row represents a patient, and the columns provide information about body measurements, blood test results, lifestyle choices, and the presence or absence of cardiovascular disease.

## Features

- Age: Patient's age (in days).
- Height: Patient's height (in centimeters).
- Weight: Patient's weight (in kilograms).
- Gender: Patient's gender (categorical).
- Systolic Blood Pressure (ap_hi): Systolic blood pressure reading.
- Diastolic Blood Pressure (ap_lo): Diastolic blood pressure reading.
- Cholesterol: Cholesterol levels (1: normal, 2: above normal, 3: well above normal).
- Glucose: Glucose levels (1: normal, 2: above normal, 3: well above normal).
- Smoking: Smoking status (binary).
- Alcohol Intake: Alcohol intake status (binary).
- Physical Activity: Physical activity status (binary).
- Cardiovascular Disease: Presence or absence of cardiovascular disease (binary).

## Tasks Completed

1. Added an Overweight Column: A new column, overweight, was added to indicate whether a patient is overweight based on their BMI (Body Mass Index). BMI is calculated as weight (kg) divided by the square of height (m). A BMI value greater than 25 is considered overweight.

2. Normalized Data: The cholesterol and glucose values were normalized. Values were converted such that 0 represents a good outcome, and 1 represents a bad outcome.

3. Categorical Plot: A categorical plot was generated to show the distribution of categorical features (cholesterol, gluc, smoke, alco, active, and overweight) split by the presence or absence of cardiovascular disease (cardio).

4. Data Cleaning: The data was cleaned by filtering out records with incorrect data, such as diastolic pressure greater than systolic pressure, height and weight values outside the 2.5th and 97.5th percentiles.

5. Heatmap: A correlation matrix was created and visualized using a heatmap, which highlights the relationships between different variables in the dataset.

## Usage

- Python 3.x
- `pandas` library
- `seaborn` library
- `matplotlib` library
- `numpy` library

Run the project using the following command:

python main.py

This will generate the categorical plot (catplot.png) and the heatmap (heatmap.png), which will be saved in the project directory.

## Testing

To run the unit tests provided in the project, execute:

python test_module.py

## License

This project is licensed under the MIT license.