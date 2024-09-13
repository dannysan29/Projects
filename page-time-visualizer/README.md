# Page View Time Series Visualizer

This project visualizes the time series data of daily page views from the freeCodeCamp.org forum. The project generates three types of visualizations: a line plot, bar plot, and box plot, to explore trends and seasonality in the data.

## Project Overview

The data spans from 2016-05-09 to 2019-12-03 and shows the number of page views on the freeCodeCamp forum. Using this data, we generate the following visualizations:

- Line Plot: Shows daily page views over the time period.
- Bar Plot: Displays the average daily page views for each month, grouped by year.
- Box Plots: Visualize the distribution of page views by year and by month to show trends and seasonality.

## Visualizations

### Line Plot

This line plot shows the daily page views over the entire data set. It provides a clear view of how page views have grown from 2016 to 2019, with some notable spikes during certain periods.

## Bar Plot

The bar plot visualizes the average page views for each month grouped by year. The color-coded bars represent different months, and this visualization helps in understanding the monthly trends in page views.

## Box Plots

- Year-wise Box Plot (Trend): Displays how the distribution of page views has changed year-over-year, showing an upward trend.
- Month-wise Box Plot (Seasonality): Visualizes the seasonal effects on page views, with certain months showing higher page views on average than others.

### Tools Used

- Pandas: For data manipulation and cleaning.
- Matplotlib: For generating the line plot and bar plot.
- Seaborn: For generating the box plots.

## Installation

To run this project locally, you need to install the required libraries:

pip install pandas matplotlib seaborn

## Usage

1. Clone the repository

git clone https://github.com/dannysan29/page-time-visualizer.git

2. Navigate to the project directory:

cd page-time-visualizer

3. Run the visualizations: To generate the visualizations, you can execute the Python script:

python time_series_visualizer.py

The script will save the plots as images (line_plot.png, bar_plot.png, and box_plot.png) in the project directory.

## Testing

The project includes unit tests to ensure the visualizations are correct. Run the tests using:

python main.py

python test_module.py

## Dataset

The dataset fcc-forum-pageviews.csv contains the page view data used for this analysis. The data has been filtered to remove the top 2.5% and bottom 2.5% of the data points to avoid outliers.

## License

This project is licensed under the MIT License.