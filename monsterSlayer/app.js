new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        beginGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= Math.trunc(this.calculateDamage(3,10));
            if(this.checkWin()) {
                return;
            };
            
            this.playerHealth -= Math.trunc(this.calculateDamage(2,14));
            this.checkWin();            
        },
        special: function() {

        },
        heal: function() {

        },
        surrender: function() {

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
