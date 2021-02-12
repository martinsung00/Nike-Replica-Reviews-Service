## Reviews Service

## Description
The reviews service is one of the four services that are being rendered onto a proxy-server. The reviews service renders product reviews and user-generated comments onto the client.

## Installation
- Run npm i to acquire the necessary modules
- Run mysql -u root < schema.sql -p and enter in the password for MySQL (Remove -p if no password is needed)
- Run npm seed to fill the database with mock data
- Run npm react-dev to compile a bundle.js

## Usage
This is a standalone microservice that can operate on its own. After the installation start the server with npm run start and paste the address, port and product ID onto any browser. 

Example url: "localhost:3000/shop/1"

## Contribution
Team Repository: https://github.com/RPT23-Simplicity

## Credits
Martin Sung (martinsung00): https://github.com/martinsung00

## Licensing
Standard MIT license
