# Rate My Rental

## description
Rate My Rental is a web application that allows tenants to rate their landlords and/or associated properties to assist future tenants in making more fully informed dicisions before entering into a lease. Renters and landlords can post properties and information such as rent, amenities, sq. footage, etc. While tenants can write reviews and provide a star rating, landlords are only able to reply to comments. The review site is a great way to get honest feedback and information regarding rentals in your current market while holding landlords accountable. The site is scalable with an ever expanding database as contributions are added by users. Future enhancements to improve user experience are being considered and the site will be added to accordingly. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
Clone down the repository found at https://github.com/Scuobahia/rate-my-rental. The site uses individual environmental variables for username and password, so locate the .env file and update appropriate fields accordingly. This file is included in the .gitignore file to keep it from pushing to your repo. Necessary packages can be installed using npm install. The current version has a database that can be seeded for testing/use. In your terminal, navigate to the root directory and open mysql in your terminal and type 'USE rate_my_rental_db'. Next, use command 'source db/schema.sql' and finally, seed the tables using 'source db/seeds.sql'. You'll now have data to work with. Quit mysql and from your terminal, run 'npm start'. The final piece of feedback after running the command should read 'Now running on PORT 3001'. You'll be able to view information in your browser by adding localhost:3001 to the address bar or using insomnia core. Associated routes can be manually entered in the url for now to view content.

## Usage
Instructions for use as listed previously. Compare with associated screenshots:

## Credits
J. Antonio Sanchez: https://github.com/Scuobahia Brandon Evans: https://github.com/bevans0708 Clayton Andersen: https://github.com/Clayton-Andersen Parker Christiansen: https://github.com/ParkerC1999

## License
MIT

## Github Repo
Scuobahia/rate-my-rental

## Contributor Email Addresses
Clayton : utah.clayton@gmail.com


![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
