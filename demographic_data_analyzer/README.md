# Demographic Data Analyzer

This project is part of the freeCodeCamp Data Analysis with Python certification. The goal of this project is to analyze demographic data from the 1994 Census database using the Pandas library in Python. The analysis answers specific questions about the dataset, including race representation, education levels, income distribution, and more.

## Project Description

The dataset provided contains demographic information about individuals, including their age, work class, education, occupation, race, and income. Using this dataset, the project calculates various statistics and answers key questions about the demographics of the population.

### Key Questions Answered:
1. **Race Representation:** How many people of each race are represented in the dataset?
2. **Average Age of Men:** What is the average age of men?
3. **Percentage with Bachelor's Degree:** What percentage of people have a Bachelor's degree?
4. **Income and Advanced Education:** What percentage of people with advanced education (Bachelors, Masters, or Doctorate) earn more than 50K? What percentage of people without advanced education earn more than 50K?
5. **Minimum Working Hours:** What is the minimum number of hours a person works per week?
6. **Income Among Minimum Hour Workers:** What percentage of people who work the minimum number of hours per week earn more than 50K?
7. **Country with Highest Percentage of High Earners:** Which country has the highest percentage of people that earn more than 50K, and what is that percentage?
8. **Most Popular Occupation in India for High Earners:** What is the most popular occupation for those who earn more than 50K in India?

### Dataset

The dataset used in this project was sourced from the UCI Machine Learning Repository:

- **Source:** Dua, D. and Graff, C. (2019). UCI Machine Learning Repository. Irvine, CA: University of California, School of Information and Computer Science.
- **Link:** [UCI Machine Learning Repository - Adult Data Set](https://archive.ics.uci.edu/ml/datasets/adult)

### Tools and Libraries Used
- **Pandas**
- **NumPy**

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/demographic-data-analyzer.git
   cd demographic-data-analyzer
2. **Create a Virtual Environment:**
    python3 -m venv env
    source env/bin/activate
3. **Install Dependencies:**
    pip install -r requirements.txt
4. **Run the Analysis: Execute the main script to see the outputs:**
    python main.py

## Usage

You can use this project to understand how demographic data can be analyzed using Python. The project demonstrates the application of data filtering, grouping, and aggregation techniques.

## Example Outputs: 
    - Race Representation:
        White                 27816
        Black                  3124
        Asian-Pac-Islander     1039
        Amer-Indian-Eskimo      311
        Other                   271
        Name: count, dtype: int64
    - Average Age of Men: 39.4 years
    - Percentage with Bachelor's Degree: 16.4%
    - Country with Highest Percentage of High      
      Earners: Iran (41.9%)
    - Most Popular Occupation in India for High 
      Earners: Prof-specialty

## Testing

Unit tests are included to verify that the function performs as expected. You can run the tests using:

python test_module.py

## License

This project is licensed under the MIT license.