# Rock, Paper, Scissors

This project implements an AI for the classic game of Rock, Paper, Scissors. The AI uses advanced pattern recognition, dynamic strategy adjustment, and multi-strategy tracking to achieve exceptionally high win rates against a variety of opponents.

## Introduction

The Rock, Paper, Scissors AI is designed to compete against different bots with various strategies. By analyzing the opponent's move patterns and dynamically adjusting its own strategy, the AI can achieve a high win rate.

## How it Works

The AI operates by tracking both its own and the opponent's moves and analyzing patterns in these sequences. It uses multiple prediction strategies simultaneously and dynamically adjusts based on the success of each strategy.

### Key Features

- Pattern Recognition: Identifies patterns in the opponent's moves and uses this information to predict their next move.
- Strategy Tracking: Keeps track of multiple strategies and selects the most successful one based on past performance.
- Dynamic Adjustment: Adapts to the opponent's playstyle over time, ensuring that it remains competitive even if the opponent changes their strategy.

## Files in the Repository

- RPS.py: The main AI logic that implements the player function.
- RPS_game.py: A script that allows you to run games between different player functions.
- main.py: A script for running the AI against predefined opponents and displaying results.
- test_module.py: Contains unit tests to verify the performance of the AI against several opponents.

## Running the Project

To run the project and test the AI, follow these steps:

1. Run the Tests: To see how the AI performs against various opponents, run the following command:

python test_module.py

2. Play a gameL You can also run individual games by executing:

python main.py

## Project Structure

- AI Logic: The core AI logic is implemented in the player function within RPS.py. It tracks the history of moves and dynamically adjusts its predictions.
- Pattern Prediction: The predict_move function analyzes sequences of moves to predict the opponent's next move.
- Strategy Management: The AI uses a multi-strategy approach, where each strategy is tracked and adjusted based on its performance.

## Results

The AI has been tested against a variety of opponents, including Abbey, Kris, Mrugesh, and Quincy, achieving win rates of over 99% in all cases. This demonstrates the effectiveness of the pattern recognition and strategy adjustment techniques used in the AI.

### Example Results

- Against Abbey: 100% win rate
- Against Kris: 99.9% win rate
- Against Mrugesh: 99.9% win rate
- Against Quincy: 99.6% win rate

## Credits

This project was from the Rock, Paper, Scissors project on freeCodeCamp.