# Mastermind

Requirements:
- node v16.19.0 or later
- npm v8.19.3 or later
- sqlite3 v3.39.5 or later

You can learn more about node and install the latest version [here](https://nodejs.org/en). You can find the node source code and additional information on [GitHub](https://github.com/nodejs/node)

You can learn about sqlite3 and download the latest version [here](https://www.sqlite.org/index.html)


**To Run:** clone the repository to your machine, navigate to the cloned directory, and run the following commands

```
npm i
npm run build
npm start
```
then navigate to localhost:3000 in your browser

for best results, view in browser window size 750x800 or larger

## Gameplay
1. Enter a username and click Start Game
2. Use the dropdowns to make a guess and click submit
3. Use the feedback provided in Guess History to update your guess
4. You have 10 guesses to figure out the correct combination of numbers
<img width="375" alt="Screenshot 2023-12-02 at 7 51 18 PM" src="https://github.com/lundas/mastermind/assets/26886397/3429fcb7-ac8a-4a4a-b21b-6c4bdf6afee2">
<img width="375" alt="Screenshot 2023-12-02 at 7 51 55 PM" src="https://github.com/lundas/mastermind/assets/26886397/b03d957f-50dd-496f-8a1e-27173653d4c7">
<img width="375" alt="Screenshot 2023-12-02 at 7 52 30 PM" src="https://github.com/lundas/mastermind/assets/26886397/8bbfe07a-5098-430b-ba5b-da421b25ee2b">
<img width="375" alt="Screenshot 2023-12-02 at 7 52 57 PM" src="https://github.com/lundas/mastermind/assets/26886397/d6b6a9e3-b3f9-4e39-acc2-e86b605ad04a">



## Code Structure
Tech Stack:
- SQLite3
- Express
- React
- Node

I built this game as a Full-Stack Web Application utilizing the Model-View-Controller architecture. MVC allows for rapid development as it ensures the separation of concerns within the codebase based on application logic, thus increasing its maintainability and scalability without sacrificing flexibility throughout the development process. MVC also works well with the Test Driven Development philosophy as its modular nature allows for relatively straightforward unit testing.

### Directories
#### Client
Contains files related to the frontend of the web application
- **dist**: holds files generated by Webpack and served to the client by the express server
- **src**: holds react components and styles.css which are bundled using Webpack and transpiled with Babel to ensure backwards compatibility before being served to the client machine
#### Server
Contains files related to the backend of the web application
- **controllers**: Contains functions invoked when a request is received and routed by the express server. These functions invoke model functions that interact with the database and then perform any logic required to transform the data received from the database before sending a response to the client.
- **db**: Contains functions that create the SQLite3 database and games table based on the supplied schema (if the database and/or table do not exist) and exports a database connection to the models so that the model functions can execute queries.
- **models**: Contains functions that interact with the database to Create, Read, Update, and Delete data.
- **index.js**: The express server that routes requests received by the server and serves responses as well as files found in the ../client/dist directory
- **mastermind.db**: the SQLite3 directory

## Extensions
- [x] Configurable Difficult Level
      
Added a drop down that controls the length of the guess as follow:
- Easy: 4 digits
- Medium: 5 digits
- Hard: 6 digits
The difficulty drop down also controls the high scores queried from the database; only games with the matching difficulty are shown.

- [x] High Scores
      
Clicking the Show High Scores button reveals a table of up to 10 games that resulted in wins, sorted by number of guesses in ascending order. These results are filtered by difficulty rating as determined by the value of the Difficulty Level Select element.
<img width="375" alt="Screenshot 2023-12-02 at 7 45 02 PM" src="https://github.com/lundas/mastermind/assets/26886397/61c01d62-7fca-4bbd-b674-e2c14b97de0b">
