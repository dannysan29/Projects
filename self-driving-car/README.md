# Self-Driving Car Simulation

This project is a simple self-driving car simulation built with JavaScript and HTML5 canvas, demomstrating the use of a neural network to train AI cars to navigate a road with traffic.

## How it Works

The simulation uses a genetic algorithm to evolve a neural network that controls the AI cars. Each car is equipped with sensors that detect the road boundaries and other cars. The sensor data is fed into the neural network, which outputs control signals for steering, acceleration, and braking. 

Cars that perform well are more likely to be selected for "reproduction," where their neural networks are combined and mutated to create offspring for the next generation. Over time, this process leads to the evolution of better-performing AI drivers.

## Features

- **Interactive Simulation:** Watch AI cars learn to drive in real time.
- **Neural Network Visualization:** See the neural network of the best-performing car and how it processes information.
* **Save/Discard Progress:** Save the best-performing AI brain to local storage and continue training later.
* **Traffic Simulation:** AI cars must navigate around other cars (with basic AI).

## How to Run

1. **Clone the repository:** 'git clone https://github.com/dannysan29/self-driving-car.git'
2. **Open 'index.html' in a web browser.**

## Files

* **`index.html`:** Main HTML file for the simulation.
* **`style.css`:** CSS file for styling the page.
* **`visualizer.js`:** Contains the `Visualizer` class for drawing the neural network.
* **`network.js`:** Contains the `NeuralNetwork` and `Level` classes.
* **`sensor.js`:** Contains the `Sensor` class.
* **`utils.js`:** Contains utility functions like `lerp`, `getIntersection`, etc.
* **`road.js`:** Contains the `Road` class.
* **`controls.js`:** Contains the `Controls` class.
* **`car.js`:** Contains the `Car` class.
* **`main.js`:** Contains the main logic for the simulation.

