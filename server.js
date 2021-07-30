const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
// var consoleTable = require('console.table')
const PORT = process.env.PORT || 3001;
const app = express();












app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  