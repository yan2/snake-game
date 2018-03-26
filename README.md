# Ann's Snake Game

Classic snake game. Control the snake direction with keyboard arrow keys to eat food and gain points.

## How to Run
1. Install npm packages
```
npm install
```

2. Compile
```
npm build
```

3. Open ```/dist/index.html``` in your browser

To run in development mode:
1. Compile and watch for changes in JS files only
```
npm start
```

## Code Description
This code is written in ES6. For readability and modularity, I created classes for each game object: board, snake, food, and game. I also created a utils file for any utility functions that used by multiple classes. 

## If I had more time
Below are just a few things I would consider if I had more time.
- Make configurations points easier to change by creating a separate config file to hold all configurable variables (e.g. canvas size, colors, fps, etc). These are currently defined as constants in each module. I could also add them as options in the UI. 
- Use a transpiler such as Babel to transpile the code so that it can be run in browsers that don't support all ES6 syntax. 
- Consider changing game loop to use time logic as opposed to a ```setTimeout()``` function. 
- Add UI tests for each component. 
- Add additional styling for the game.
- Consider responsiveness of the application.
- Should food have ability to be created at a position where the snake is currently?
