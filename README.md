# CryptoSwapForm

CryptoSwapForm is a React-based web application that allows users to swap between different cryptocurrencies. The application uses a static `prices.json` file to provide exchange rates and offers a user-friendly interface for swapping tokens.

## Features

- Swap between different cryptocurrencies.
- Exchange rates from a static `prices.json` file.
- Connect wallet functionality.
- Responsive design.

## Demo

[Live Demo](https://your-live-demo-link.com) (replace this with your actual demo link)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/samuellam123/LamYuEn_CryptoSwapForm.git
    cd LamYuEn_CryptoSwapForm
    ```

2. Checkout the `reactjs` branch:
    ```bash
    git checkout reactjs
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

Once the development server is running, you can access the application at `http://localhost:3000`. 

- Enter the amount of cryptocurrency you want to swap.
- Select the cryptocurrency you want to sell and buy.
- Click the "Get Token Exchange Rate" button to fetch the exchange rate from the static `prices.json` file.
- Use the "Connect Wallet" button to connect your wallet (note: implement the wallet connection logic as needed).

## Components

The project is divided into several components to maintain modularity and reusability:

- **Header**: Displays the application title.
- **InputAmount**: Input field for entering the amount to send.
- **TokenSelect**: Dropdowns for selecting the tokens to swap.
- **ExchangeRate**: Displays the calculated exchange rate.
- **Buttons**: Contains buttons for fetching the exchange rate and connecting the wallet.

### File Structure

