# SEAT:CODE Technical test

This project uses Cypress v12.13.0. In order to be able to run the tests correctly it is necessary to install it on your system .For this you can do the following steps :

## Project installation
  - The project uses the latest version of NodeJs (18.16.0), to install it execute the following steps according to your OS.

### Windows
- Download and install the latest version of NodeJS (At the time of writing this is : 18.16.0) from below URL:
> https://nodejs.org/en/download

- Once the installation is finished you can verify that everything has gone well by executing the following command via terminal:
> node -v 

- The output should look something like this:
> v18.16.0

### Linux
- install NodeJs via terminal executing the following steps:
>  sudo apt install nodejs

- Once the installation is finished you can verify that everything has gone well by executing the following command:
> nodejs -v 

- The output should look something like this:
> v18.16.0

- On Linux OS it is necessary to install the *npm package* to be able to install Cypress later. To do this use the following command:
> sudo apt install npm


## Cypress installation
In order to use Cypress it's necessary to install it via npm using the following command:
> npm install cypress --save-dev

For system requirements you can go to: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

## Test Execution
- You can run the tests using the following command:
> npx cypress run
