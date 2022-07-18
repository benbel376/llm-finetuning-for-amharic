# refund_by_location_dApp
[![npm](https://img.shields.io/npm/v/@react-native-community/geolocation)](https://www.npmjs.com/package/@react-native-community/geolocation) [![CircleCI Status](https://img.shields.io/circleci/project/github/react-native-community/react-native-geolocation/master.svg)](https://circleci.com/gh/react-native-community/workflows/react-native-geolocation/tree/master) ![Supports Android, iOS and web](https://img.shields.io/badge/platforms-android%20%7C%20ios%20%7C%20web-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/@react-native-community/geolocation.svg)

**Table of content**

- [Overview](#overview)
- [Install](#install)
- [Introduction](#Introduction)
- [Files](#Files)

## Overview

In this project, a mobile web app will be developed to obtain location information from a mobile sensor module and confirm that the user is in a specific location. The funding will be given if the provided location and the required location are compatible. The Solidity programming language will be used in this project to create the blockchain concept utilizing an Etherium smart contract. The user can also view the status of his or her fund on the front end.

![image](https://user-images.githubusercontent.com/44437166/179430147-ebeec781-ab16-40bb-bdd9-6696d49be2be.png)

## Introduction
The specific objectives implemented in this project are as follows.
1. Web app: 
      * Add an employee’s address
      * Define parameters for each employee:
          * Geographic boundary
          * Budget 
      * Create a transaction with the above users’ data and send transaction
      * Create another transaction to transfer the required budget to the smart contract.
2. Smart contract backend:
      * Store list of users and associated information in the backend after the transaction is verified.
      * When users’ request for their requirements verify their identity and send their specific location requirement from the above list
      * When users send their gps location, the smart contract will verify their identity, validate their gps info by referring to their stored requirement and record whether they fulfilled their requirement or not
      * Approve fund release at the specified release time or deny.
3. Mobile dapp: 
      * Load location requirement from the smart contract
      * continuously read gps information from the mobile sensors
      * and send the gps to the smart contract at random time when the person confirms the send by pressing a button.

## Files
> ### Frontend-mobile
> a react-native application that gets the location of a user and sends it to the smart contract to the check_position function to run some tests.
> ### Frontend-web
> a react application with two pages one for adding employees to the smart contract and another for paying a given employee if the employee is added to the smart contract and he/she fullfilled the contract.
> ### Backend
> the Ethereum smart contract. and supporting files for a truffle project. development and testing of the smart contract was done on the remix IDE
> ### Images
> screenshots and other images.
> ### Test
> The testing for the smart contract is done using chai, chai is one of the smart contract testing mechanisms out there. Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. I used it to create a unit testing for the function I put on the above smart contract. The testing was done on an environment created by hardhat.

## Install

```
git clone https://github.com/benbel376/Ethereum_Dapp.git
cd Ethereum_Dapp
```

## Author

👤 **Biniyam Belayneh**

- GitHub: [Biniyam Belayneh](https://github.com/benbel376)
- LinkedIn: [Biniyam Belayneh](https://www.linkedin.com/in/biniyam-belayneh-demisse-42909617a/)

## Show your support

Give a ⭐ if you like this project!
