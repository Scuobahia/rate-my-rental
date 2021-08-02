const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const helpers = require('./utils/helpers');
const session = require('express-session');
// var consoleTable = require('console.table')
const PORT = process.env.PORT || 3001;
const app = express();

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize
   })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));







sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now listening'));
});