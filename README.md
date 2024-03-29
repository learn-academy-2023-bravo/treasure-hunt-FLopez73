# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
  branch: game-board
  -import square into App.js and do a component call
  -create a 9 square grid
  -pass state array to our square component.
  -styled square

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
  -add an onclick button to square.js file
  -Nees to get the board array position when clicking to square div
  -passed index to square.
  -added handleGamePlay to App.js
  passed handleGamePlay to Square to get index by using Functional Props.

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
  -create function on App.js handleGamePlay passing "clickedSquare" in the parameter.
  -set variable updateBoard and use spread operator to copy array
  -state what you want to replace it with at particular index.
  -lastly setboard(updateBoard) to replace question mark with tree.
  line 17-20 app.jsand lines 4-5 in square.js

- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
  -created a useState for treasure location and bombLocation.

- As a user, I can click on a “Play Again” button that will restart the game.
  declare a variable that triggers the window reload.
- add a button tag that has an onClick that calls the gameResart variable to trigger window reload.

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.

-create a useState variable for count.
-use setCount to decrement a turn from the starting point of 5 that I declared.

- when count reaches 0 utulize restartGame variable to reaload page.

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.

- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
