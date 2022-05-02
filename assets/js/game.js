
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("FIGHT or SKIP this battle?");
        if (promptFight === "FIGHT" || promptFight === "fight") {

    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);

    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");   
    }
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("You sure?");
        if (confirmSkip) {
            window.alert(playerName + " skipped the fight. Goodbye.");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }
     else {
      window.alert("You need to chose a valid option. Try again.");
     }   

};


fight();