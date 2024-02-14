import chalk from 'chalk';

// Function to log text in blue color
export function logger(text: string): void {
    // Log text with blue color using chalk
    console.log(chalk.blue(JSON.stringify(text, null, 2)));
}

// Function to log text in yellow color as an alert
export function alertLogger(text: string): void {
    // Log text with yellow color using chalk
    console.log(chalk.yellow(JSON.stringify(text, null, 2)));
}

// Function to log text in red color as an error
export function errorLogger(text: string): void {
    // Log text with red color using chalk
    console.log(chalk.red(JSON.stringify(text, null, 2)));
}