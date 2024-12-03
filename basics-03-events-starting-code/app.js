const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    setName(event, lastname){
      this.name = event.target.value + " " + lastname;
    },

    confirmInput(){
      this.confirmedName = this.name;
    },

    addCounter(){
      this.counter++;
    },

    reduceCounter(){
      this.counter--;
    },

    submitForm(){
      alert('submitted');
    }
  }
});

app.mount('#events');
