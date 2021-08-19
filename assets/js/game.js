// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

/*
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 
*/

// Creates the fight function
var fight = function(enemy) {

  while(enemy.health > 0 && playerInfo.health > 0) {
    //Prompt the player to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
   if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)      
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemy.health + ' health remaining.'
    );

    //Check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemyName + " has died");
      
      //award player money for winning 
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    }
    else {
        window.alert(enemyName + " still has " + enemy.health + " health left.");
    }

    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    var damage = randomNumber(enemy.attack -3, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
        enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaning."
    );

    //Check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
  } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // For loop of the game 
for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0){
    //Let the player know what round they are in,
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    //Pick new enemy to fight based on the index of the enemyNames arry
    var pickedEnemyObj = enemyInfo[i];

    //reset enemyHleath before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    //use debugger to pause script from running and chek what's going on
    //debugger

    //pass picked enemy name varaible value to the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);

    //if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      // ask if player wants to use teh store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
      
      // if yes, take them to the store() function
      if (storeConfirm){
      shop();
      }
    }

    }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    }
  }
  // after the loop ends, player is either out of health or enemies to fight so run the endGame function
  endGame();
};

var endGame = function() {
  // if the player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game 
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
        playerInfo.upgradeAttack();
        break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");
      
      //do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

//Generates a random number based on min and max input
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
};

//Function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");  
  }

  console.log("Your robot's name is " + name);
  return name;
};

// Creating the player object with its status 
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  //function to resest player stats
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, //coma
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Reflling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }, //coma
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

// You can also log multiplae values at once like this 
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// Creating the enemy object with its status 
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

//Start the game when the page loads
startGame();