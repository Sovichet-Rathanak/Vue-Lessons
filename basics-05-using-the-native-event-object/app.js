const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch:{
    name(value){
      if(value === ""){
        this.fullname = "";
      }else{
        this.fullname = value + " " + "Sovichet";
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = "";
    }
  },
  computed:{ //In most cases it is use to output something
    // fullname(){
    //   if (this.name === "") {
    //     return "";
    //   } else {
    //     return this.name + " " + "Sovichet";
    //   }
    // }
  }
});

app.mount('#events');
