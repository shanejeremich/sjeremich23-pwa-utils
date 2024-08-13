# 🛡️ Backend API Validation Middleware

This project provides a set of middleware functions for validating common user input fields in an Express.js application. The middleware functions include validation for name, email, phone number, birthday, and password.

## ✨ Features

- **Name Validation**: Ensures the name contains only letters and spaces.
- **Email Validation**: Ensures the email follows the RFC 5322 standard.
- **Phone Validation**: Ensures the phone number follows the format `xxx-xxx-xxxx`.
- **Birthday Validation**: Ensures the birthday follows the formats `mm/dd/yyyy`, `mm-dd-yyyy`, `mm.dd.yyyy`, or `mm dd yyyy`.
- **Password Validation**: Ensures the password is at least 8 characters long and contains at least one letter and one number.

## 📦 Installation

To install the package, use npm:

```bash
npm install @sjeremich23/pwa-utils
```

## 🚀 Usage

### ES6 Module

Import the middleware functions in your Express.js application:

```javascript
import {
  validateAll,
  validateName,
  validateEmail,
  validatePhone,
  validateBirthday,
  validatePassword,
} from "@sjeremich23/pwa-utils";
import express from "express";

const app = express();

app.use(express.json());

app.post("/signup", validateAll, (req, res) => {
  // Your signup logic here
  res.send("Signup successful!");
});

// Example of using individual validation functions
app.post("/validate", validateName, validateEmail, (req, res) => {
  // Your validation logic here
  res.send("Validation successful!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### CommonJS Module

Import the middleware functions in your Express.js application:

```javascript
const {
  validateAll,
  validateName,
  validateEmail,
  validatePhone,
  validateBirthday,
  validatePassword,
} = require("@sjeremich23/pwa-utils");

const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup", validateAll, (req, res) => {
  // Your signup logic here
  res.send("Signup successful!");
});

// Example of using individual validation functions
app.post("/validate", validateName, validateEmail, (req, res) => {
  // Your validation logic here
  res.send("Validation successful!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## 🛠️ Middleware Functions

`validateName`

- Validates the name field in the request body.

`validateEmail`

- Validates the email field in the request body.

`validatePhone`

- Validates the phone field in the request body.

`validateBirthday`

- Validates the birthday field in the request body.

`validatePassword`

- Validates the password field in the request body.

`validateAll`

- Runs all the validation middleware functions in sequence.
