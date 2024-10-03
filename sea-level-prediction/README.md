# Sea Level Predictor

This projects analyzes a dataset of global average sea level changes since 1880 and predicts the sea level change through the year 2050 using Python.

## Project Description

The goal of this project is to analyze historical data on sea level changes and to create a predictive model for future sea level changes using linear regression.

## Instruction

1. **Import the data**: Use Pandas to import the data from 'epa-sea-level.csv'.
2. **Create a scatter plot**: Use matplotlib to create a scatter plot using the Year column as the x-axis and the CSIRO Adjusted Sea Level column as the y-axis.
3. **Plot the first line of the best fit**: Use the 'linregress' function from 'scipy.stats' to get the slope and y-intercept of the line of best fit. Plot this line over the scatter plot and extend it to year 2050.
4. **Plot the second line of best fit**: Create another line of best fit using data from the year 2000 through the most recent year in the dataset. Extend this line to the year 2050.
5. **Add labels and title**: The x label should be "Year", the y label should be "Sea Level (inches)", and the title should be "Rise in Sea Level".

## Development

- Write your code in 'sea_level_predictor.py'.
- Use 'main.py' to test your code during development.

## Testing

- The unit tests for this project are in `test_module.py`.
- The tests are automatically run by `main.py`.

## Installation

To run this project locally, follow these steps:

1. Clone the repository.
2. Ensure you have Python 3.x installed.
3. Run the main script to generate the plot and run tests:
    ```bash
    python main.py
    ```

## Data Source

This project uses the "Global Average Absolute Sea Level Change, 1880-2014" dataset from the US Environmental Protection Agency, which includes data from CSIRO (2015) and NOAA (2015).

## Credits 

This project was developed as part of the freeCodeCamp curriculum.