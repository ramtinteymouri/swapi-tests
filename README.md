# Automated Testing for Star Wars API (SWAPI)

## Introduction
This project aims to create automated tests for the Star Wars API (SWAPI) to ensure its functionality is working as expected. The SWAPI URL is [https://swapi.dev/](https://swapi.dev/). The tests are written in JavaScript/TypeScript and utilize [Mocha](https://mochajs.org/) as the test framework and [Chai](https://www.chaijs.com/) for assertions.

## Setup
Follow the steps below to set up and run the automated tests:

### Prerequisites
- Node.js installed on your machine ([https://nodejs.org/](https://nodejs.org/))

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ramtinteymouri/swapi-tests.git
    ```

2. Navigate to the project directory:
    ```bash
    cd swapi-tests
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Running Tests
- To run the entire tests, execute the following command:
    ```bash
    npm test
    ```
- To run tests from a specific file, execute the following command:
    ```bash
    npm run test-file path/to/your/test-file.js
    ```

## Assumptions
- The SWAPI is accessible and its responses are consistent.
- The network connection is stable during test execution.
