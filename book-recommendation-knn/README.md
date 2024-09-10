# Book Recommendation Engine Using K-Nearest Neighbors (KNN)

## Project Overview

This project implements a book recommendation system using the K-Nearest Neighbors (KNN) algorithm. The recommendation system is based on the Book-Crossings dataset, which contains over 1.1 million ratings of 270,000 books by 90,000 users. The goal is to recommend similar books to users based on cosine similarity between the ratings of different books.

- [Project Overview](#project-overview)
- [Dataset](#dataset)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Testing](#testing)

## Dataset

The dataset used in this project is the Book-Crossings dataset, available through FreeCodeCamp's project repository.

The dataset contains the following files:

- BX-Books.csv: Contains metadata about books, including ISBN, title, and author.
- BX-Book-Ratings.csv: Contains user ratings for books, with user IDs, ISBNs, and ratings on a scale of 1-10.

### Dataset Filtering

For improved accuracy, the dataset has been filtered to include:

- Users who have rated at least 200 books.
- Books that have received at least 100 ratings.

## Technologies Used

- Python: Primary language for data processing and model creation.
- Pandas: For data manipulation and analysis.
- Scikit-learn: For building the K-Nearest Neighbors model.
- Scipy: To handle sparse matrices efficiently.
- Google Colaboratory: For running the project in a cloud-based environment.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/yourusername/book-recommendation-knn.git

2. Navigate to the project directory:

cd book-recommendation-knn

3. Install the required -r requirements.txt

4. Download the Book-Crossings dataset from FreeCodeCamp and place the CSV files in the root directory.

## Usage

1. Open the notebook in your preferred environment (e.g., Jupyter, Google Colab):

jupyter notebook fcc_book_recommendation_knn.ipynb

2. Run each cell in the notebook to load the data, process it, and create the recommendation model.

3. Use the get_recommends() function to get book recommendations. Example:

get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")

This will return a list of 5 similar books, along with their distances from the input book.

## Testing

The project includes a built-in test to verify the correctness of the recommendation engine. To run the test:

1. Run the provided test cell:

test_book_recommendation()

2. You should see the following output if the project is working correctly:

You passed the challenge! 🎉🎉🎉🎉🎉