// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiplae values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

// Creates the fight function
var fight = function(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0) {
    //Prompt the player to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
   if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)      
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died");
      
      //award player money for winning 
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning."
    );

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
  } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0){
    //Let the player know what round they are in,
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    //Pick new enemy to fight based on the index of the enemyNames arry
    var pickedEnemyName = enemyNames[i];

    //reset enemyHleath before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and chek what's going on
    //debugger

    //pass picked enemy name varaible value to the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}

//executes the fight function
//fight();