const app = Vue.createApp({
  data() {
    return {
      name: "Sovichet Rathanak",
      age: 20,
      image: "/Section_2/basics-assignment-1-problem/tiger-shark.jpg",
      someText: "I do be learning...",
    };
  },

  methods: {
    rand_int(){
        return Math.random().toFixed(2);
    }
  },
});

app.mount("#assignment");