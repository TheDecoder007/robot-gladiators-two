
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("FIGHT or SKIP this battle?");
        if (promptFight === "FIGHT" || promptFight === "fight") {

        } if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("You sure?");
        
        if (confirmSkip) {
            window.alert(playerName + " skipped the fight. Goodbye.");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        console.log("playerMoney", playerMoney);
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    playerHealth = playerHealth - enemyAttack;
    console.log("You have " + playerHealth + " left.");

    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");   
    }  
    } 
};

//  else {
//   window.alert("You need to chose a valid option. Try again.");
//   //fight();
//  }  
    var startGame = function() {
        playerHealth = 100;
        playerAttack = 25;
        playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
     window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle. Game over!");
        break;
    }
}
    endGame();
};
var endGame = function() {
    if (playerHealth > 0) {
    window.alert("Great Job, you survived! Your score is " + playerMoney + ".");
    }
    else {
        window.alert("You lost your robot in battle!");
    }
var playAgainConfirm = window.confirm("Do you want to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else { 
        window.alert("Thank you for playing!");
    }
};

startGame();