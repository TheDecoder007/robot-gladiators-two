
// var playerName = window.prompt("What is your robots name?");
// var playerHealth = 100;
// var playerAttack = 25;
// var playerMoney = 10;

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;


var fight = function(enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("FIGHT or SKIP this battle?");
        if (promptFight === "FIGHT" || promptFight === "fight") {

        } if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("You sure?");
        
        if (confirmSkip) {
            window.alert(playerInfo.name + " skipped the fight. Goodbye.");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
    if (enemy.health <=0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money = playerInfo.money + 20;
        console.log("playerInfo.money", playerInfo.money);
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log("You have " + playerInfo.health + " health left.");

    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died!");
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");   
    }  
    } 
};

//  else {
//   window.alert("You need to chose a valid option. Try again.");
//   //fight();
//  }  
    var startGame = function() {
        playerInfo.reset();
        // playerInfo.health = 100;
        // playerInfo.attack = 25;
        // playerInfo.money = 10;

for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
     window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyObj = enemyInfo[i];

    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
    window.alert("Great Job, you survived! Your score is " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "upgrade": 
        case "UPGRADE":
            playerInfo.upgradeAttack();
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

        var getPlayerName = function() {
            var name = "";

            // add loop 
            while (name === "" || name === null) {
                name = prompt("What is your robots name?");
            }

            console.log("your name is " + name);
            return name;
        }; 

    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 25,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 25;
        },
        refillHealth: function() {
            if (this.money >= 7) {
                window.alert("Refilling health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            }
            else {
                window.alert("You're too broke!");
            }
        },
        upgradeAttack: function() {
            if (this.money >= 7) {
                window.alert("Upgrading attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
            }
            else {
                window.alert("You're too broke!");
            }
        }
    };
    
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

startGame();