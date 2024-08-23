# Mean-Variance-Standard-Deviation Calculator

This project is part of the freeCodeCamp Data Analysis with Python certification. The goal is to create a function named `calculate()` in `mean_var_std.py` that uses NumPy to compute various statistical measures (mean, variance, standard deviation, max, min, and sum) for the rows, columns, and elements of a 3x3 matrix.

## Project Description 

```python
{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}

## Requirements
- Input: A list containing exactly 9 numerical values.
- Output: A dictionary containing the mean, variance, standard deviation, max, min, and sum of the rows, columns, and flattened 3x3 matrix.
- If the input list contains fewer than 9 elements, the function should raise a ValueError with the message: "List must contain nine numbers."
- The returned values in the dictionary should be in the form of lists, not NumPy arrays.

## Example 
For the input list '[0, 1, 2, 3, 4, 5, 6, 7, 8]', the function should return the following dictionary: 

```python
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}

## Development

- Write your code in mean_var_std.py.
- For development, you can use main.py to test your code.
- The project can be developed in Gitpod using the provided starter code.

## Testing
 
- Unit tests for this project are provided in test_module.py.
- To ensure your code meets the requirements, you can run these tests to verify correctness.
- Tests can be run with the following command in bash:

python test_module.py

## License 

This project is licensed under the MIT license.