# Request Header Parser Microservice

This is a microservice that parses request headers to return information about the client's IP address, language, and software.

## Description

This project is a full stack JavaScript application that serves a simple microservice. The microservice parses the headers of incoming requests and returns a JSON response containing the following information:

- ipaddress: The IP address of the client.
- language: The preferred language of the client.
- software: The user agent string of the client.

## Example Usage

You can test the microservice by making a GET request to the following endpoint:

[baseurl]/api/whoami

### Example Output

{
  "ipaddress": "::ffff:159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}

## Installation

1. Clone the repository

git clone https://github.com/Projects/headerparser.git

2. Navigate to the project directory:

cd headerparser

3. Install the dependecies:

npm install dotenv

4. Create a '.env' file in the root directory and add your environment variables:

PORT=3000

## Usage

1. Start the server:

node index.js

2. Open your browser and navigate to 'http://localhost:3000'.

## License

This project is licensed under the MIT license