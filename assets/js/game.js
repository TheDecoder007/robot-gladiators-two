
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
            playerMoney = Meth.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        console.log("playerMoney", playerMoney);
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);

    console.log("You have " + playerHealth + " health left.");

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

    enemyHealth = randomNumber(40, 60);

    fight(pickedEnemyName);
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("Want to visit the shop?");
            if (storeConfirm) {
            shop();
            }
        }
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

var shop = function() {
    var shopOptionPrompt = window.prompt(" REFILL health, UPGRADE attack, or LEAVE?");

    switch(shopOptionPrompt) {

        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
            ("Refilling health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You're too broke! Get more money.");
            }
            break;

        case "upgrade": 
        case "UPGRADE":
            if (playerMoney >= 7) {
            ("Upgrading attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You're too broke! Get more money.");
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;

        default:
            window.alert("Please pick a valid option.");
            shop();
            break;

    }
};

    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };

startGame();