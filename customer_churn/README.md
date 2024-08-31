# Customer Churn Analysis Dashboard

A comprehensive analysis of customer churn using Tableau Public, focusing on visualizing key factors such as contract length, support calls, and subscription type.

## Table of Contents
- [Project Description](#project-description)
- [Key Visualizations](#key-visualizations)
- [Data](#data)
- [Methodology](#methodology)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project involves the creation of a Customer Churn Analysis Dashboard using Tableau Public. The dashboard visualizes key factors contributing to customer churn, such as contract length, support calls, and subscription type. The analysis aims to help businesses understand the drivers behind customer churn and develop strategies to improve customer retention.

## Key Visualizations

The dashboard includes the following visualizations:

- **Bar Chart:** Churn rate by contract length.
- **Heat Map:** Relationship between support calls and churn.
- **Pie Chart:** Churn distribution by subscription type.

You can view the full dashboard ['https://public.tableau.com/views/ChurnAnalysis_17250646833070/ChurnbyContractLength?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'].

## Requirements

- Python 3.x
- Jupyter Notebook
- Tableau Public

## Data

The dataset used in this project includes customer information, subscription details, and interaction data. The dataset has been pre-processed and cleaned in Python before being used for visualization in Tableau.

Data fields include:
- Customer demographics (e.g., Age, Gender)
- Subscription details (e.g., Subscription Type, Contract Length)
- Interaction metrics (e.g., Support Calls, Last Interaction)
- Churn label

## Methodology

1. **Data Cleaning and Preparation:** The data was pre-processed using Python to handle missing values, encode categorical variables, and normalize numerical fields.
2. **Modeling:** A logistic regression model was applied to predict churn, and the results were visualized in Tableau.
3. **Visualization:** Key insights were visualized using Tableau Public to create an interactive dashboard.

## Results

- **High churn rates** were observed among customers with monthly contracts.
- **Support calls** showed a strong correlation with churn, indicating potential customer dissatisfaction.
- **Standard subscription types** exhibited higher churn compared to premium subscriptions.

The complete analysis and insights can be viewed on the ['https://public.tableau.com/views/ChurnAnalysis_17250646833070/ChurnbyContractLength?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'].


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

## License

This project is licensed under the MIT License.