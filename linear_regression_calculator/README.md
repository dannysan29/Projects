# Linear Regression Health Costs Calculator

## Overview

This project is part of the freeCodeCamp Machine Learning certification, where the goal is to predict healthcare costs using a regression algorithm. The project was completed using Google Colaboratory, and the dataset consists of various attributes related to individuals' healthcare costs. The objective is to train a linear regression model to predict healthcare expenses within a Mean Absolute Error (MAE) of less than $3500.

## Project Description


Here is a draft README file for your Linear Regression Health Costs Calculator project from freeCodeCamp:

Linear Regression Health Costs Calculator
Overview
This project is part of the freeCodeCamp Machine Learning certification, where the goal is to predict healthcare costs using a regression algorithm. The project was completed using Google Colaboratory, and the dataset consists of various attributes related to individuals' healthcare costs. The objective is to train a linear regression model to predict healthcare expenses within a Mean Absolute Error (MAE) of less than $3500.

Project Description
In this project, I worked with a dataset that includes demographic and lifestyle information such as age, sex, BMI, children, smoking status, region, and medical expenses. The task was to develop a regression model to predict healthcare expenses based on these attributes.

The key steps of the project are as follows:

- Data Preprocessing: Converting categorical data into numerical values.
- Splitting Data: Dividing the dataset into a training set (80%) and a test set (20%).
- Model Training: Building a linear regression model using TensorFlow/Keras.
- Model Evaluation: Testing the model's accuracy by evaluating its Mean Absolute Error (MAE) on the test dataset.
- Results Visualization: Plotting the predicted healthcare expenses versus the true expenses.

## Dataset

The dataset used is from freeCodeCamp's repository: insurance.csv.

- Features:
    - age: Age of the individual
    - sex: Gender of the individual
    - bmi: Body Mass Index (BMI)
    - children: Number of children
    - smoker: Whether the individual is a smoker
    - region: The region where the individual resides
    - expenses: Annual medical expenses (target variable)

# Implementation

## Libraries Used

- TensorFlow: For building and training the regression model.
- Pandas: For data manipulation and preprocessing.
- Matplotlib: For plotting the results and visualizing the model's predictions.
- NumPy: For handling numerical computations.

## Key Steps

1. Importing Libraries and Data

All necessary libraries were imported, including TensorFlow, Keras, Pandas, and Matplotlib. The dataset was loaded using pandas.read_csv().

2. Data Preprocessing

- Converted categorical columns (sex, smoker, region) into numerical values using .astype('category').cat.codes.
- Split the dataset into training (80%) and testing (20%) datasets.
- Popped off the expenses column from the dataset to create train_labels and test_labels.

3. Model Creation and Training

- A simple Sequential model with two Dense layers was created using Keras.
- A normalization layer was added to scale the inputs.
- The model was compiled using the Adam optimizer, Mean Absolute Error (MAE) as the loss function, and Mean Squared Error (MSE) as a performance metric.
- The model was trained using 100 epochs with a validation split of 0.2.

4. Model Evaluation

The model was evaluated using the test dataset, achieving a Mean Absolute Error (MAE) below 3500, successfully passing the project challenge.

5. Results Visualization

A scatter plot was generated to compare the predicted medical expenses with the true values.

## Results

- Final MAE: 3473.13
- Visualization: The plot shows how closely the predicted expenses align with the true expenses, indicating the model's performance.

## Conclusion

This project demonstrated how to preprocess a dataset, build a linear regression model using TensorFlow and Keras, and visualize the results to evaluate the model's performance. The trained model successfully predicted healthcare expenses within a MAE of $3500, meeting the project’s requirements.

## How to Run

To run this project locally or on Google Colab:

1. Clone or download the notebook.

2. Install the necessary libraries (TensorFlow, Pandas, Matplotlib, NumPy).

3. Load the dataset (insurance.csv).

4. Follow the steps in the notebook to preprocess the data, train the model, and evaluate it.

5. Visualize the results.

## Acknowledgments

- This project was developed as part of the freeCodeCamp Machine Learning curriculum.
- The dataset used for the predictions is provided by freeCodeCamp.