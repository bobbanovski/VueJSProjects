new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        beginGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = Math.trunc(this.calculateDamage(3,10))
            this.turns.unshift({
                isPlayer: true,
                text: 'You hit the monster for ' + damage.toString()
            });
            this.monsterHealth -= damage;
            if(this.checkWin()) {
                return;
            };
            
            this.monsterAttacks();            
        },
        special: function() {
            var damage = Math.trunc(this.calculateDamage(10,20));
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'You hit the monster for ' + damage.toString()
            })
            if(this.checkWin()) {
                return;
            };
            this.monsterAttacks();
        },
        monsterAttacks: function(){
            var monsterDamage = Math.trunc(this.calculateDamage(2,14));
            this.playerHealth -= monsterDamage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits you for ' + monsterDamage.toString()
            })
        },
        heal: function() {
            var healing = Math.trunc(Math.random() * (15 - 5) + 5);
            if (this.playerHealth <= 85) {
                this.playerHealth += healing;  
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'You heal for ' + healing.toString()
            })
            this.monsterAttacks();
        },
        surrender: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return (Math.random() * (max - min)) + min;
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')){
                    this.beginGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')){
                    this.beginGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
    }
})
