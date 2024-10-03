# Cat and Dog Image Classifier

## Project Overview

This project is a machine learning model built using TensorFlow 2.0 and Keras to classify images of cats and dogs. The goal was to create a convolutional neural network (CNN) that can correctly classify images of cats and dogs with at least 63% accuracy, with extra credit for achieving 70% accuracy. The model was trained and tested using a dataset provided by FreeCodeCamp.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Training Process](#training-process)
- [Evaluation](#evaluation)
- [Results](#results)
- [Conclusion](#conclusion)

## Installation and Setup

This project is designed to run in Google Colab due to its need for GPU acceleration to train the convolutional neural network efficiently.

To run the project, follow these steps:

1. Open the Colab Notebook:

    - Download the notebook file (fcc_cat_dog.ipynb) from this repository.
    - Upload the file to your Google Drive or directly open it in Google Colab.
Alternatively, you can open Google Colab and upload the notebook there.

2. Install Required Libraries: Google Colab comes pre-installed with TensorFlow, but in case you need to install any additional libraries (though unlikely), you can do so using:

!pip install tensorflow

3. Upload Dataset: 

    - You will need to download and unzip the dataset directly in the notebook using the following commands:

    !wget https://cdn.freecodecamp.org/project-data/cats-and-dogs/cats_and_dogs.zip
    !unzip cats_and_dogs.zip

4. Run the Cells:

    - Once the dataset is downloaded and the necessary dependencies are installed, you can run the notebook cells sequentially to train and evaluate the model.

## Dataset

The dataset used in this project is provided by FreeCodeCamp. It consists of images of cats and dogs divided into training, validation, and test sets.

- Training Set: 2,000 images (1,000 cats, 1000 dogs)
- Validation Set: 1,000 images (500 cats, 500 dogs)
- Test Set: 50 images (mixed cats and dogs)

The dataset is structured as follows:

cats_and_dogs/
|__ train/
    |______ cats/
    |______ dogs/
|__ validation/
    |______ cats/
    |______ dogs/
|__ test/

## Model Architecture

The convolutional neural network (CNN) model consists of the following layers:

- Conv2D: 32 filters, kernel size of 3x3, ReLU activation, input shape of (150, 150, 3)
- MaxPooling2D: Pool size of 2x2
- Conv2D: 64 filters, kernel size of 3x3, ReLU activation
- MaxPooling2D: Pool size of 2x2
- Conv2D: 128 filters, kernel size of 3x3, ReLU activation
- MaxPooling2D: Pool size of 2x2
- Flatten: Flatten the output
- Dense: 512 units, ReLU activation
- Dropout: 0.5 to prevent overfitting
- Dense: 1 unit, Sigmoid activation for binary classification

## Training Process

The model was trained for 15 epochs using the Adam optimizer and the binary crossentropy loss function. The images were augmented using techniques such as rotation, zoom, width and height shifts, and horizontal flipping to improve generalization.

## Evaluation

The model's performance was evaluated using the validation set during training and the test set after training. The final accuracy on the test set was 70%, meeting the challenge's extra credit requirement.

## Results

- Training Accuracy: ~62.5%
- Validation Accuracy: ~55.6%
- Test Accuracy: 70%

## Conclusion

This project demonstrates the ability to build and train a CNN model capable of classifying images of cats and dogs with reasonable accuracy. The final model achieved 68% accuracy on the test set, surpassing the required 63%.