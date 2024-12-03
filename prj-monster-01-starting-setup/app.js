function randomValue(minVal, maxVal){
    return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.playerHealth = 0;
        this.winner = 'Draw';
      } else if (value <= 0) {
        this.playerHealth = 0;
        this.winner = "Monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.monsterHealth = 0;
        this.winner = "Draw";
      } else if (value <= 0) {
        this.monsterHealth = 0;
        this.winner = 'Player';
      }
    },
  },
  methods: {
    attackBtn() {
      let atkDmg = randomValue(5, 10);
      this.monsteratk();
      this.monsterHealth -= atkDmg;
      this.addLogMessage('Player', 'attack', atkDmg);
      this.round++;
    },
    monsteratk() {
      let monsterDmg = randomValue(5, 13);
      this.playerHealth -= monsterDmg;
      this.addLogMessage('Monster', 'attack', monsterDmg);
    },
    special_atkBtn() {
      let specialDmg = randomValue(10, 20);
      this.monsteratk();
      this.monsterHealth -= specialDmg;
      this.addLogMessage('Player', 'special attack', specialDmg);
      this.round++;
    },
    healBtn() {
      let heal = randomValue(5, 20);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
        this.monsteratk();
      }
      this.addLogMessage('Player', 'heal', heal);
      this.round++;
    },
    surrenderBtn() {
     this.winner = "Monster";
     this.playerHealth = 0;
    },
    restartGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = null;
      this.logMessages = [];
    },
    addLogMessage(who, what, value){
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  },
});

app.mount("#game");