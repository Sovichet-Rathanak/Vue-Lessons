const app = Vue.createApp({
    data(){
        return{
            result: 0
        };
    },
    methods:{
        addNumber(num){
            this.result += num;
        }
    },
    computed:{
        counter(){
            if(this.result < 37){
                return "Not there yet";
            }else if(this.result > 37){
                return "Too much";
            }else{
                return this.result;
            }
        }
    },
    watch:{
        counter(){
            console.log("Watcher is watching...")
            const that = this;
            setTimeout(function(){
                that.result = 0;
            }, 5000)
        }
    }
});

app.mount("#assignment");