const app = Vue.createApp({
    data(){
        return {
          GoalA: "Learn Vue",
          GoalB: "<h3>Learn Javascript</h3>",
          VueLink: "https://vuejs.org/",
        };
    },

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.GoalA;
            }else{
                return this.GoalB;
            }
        }
    }
});

app.mount("#user-goal");