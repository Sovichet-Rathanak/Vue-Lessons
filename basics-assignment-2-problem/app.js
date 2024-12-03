const app = Vue.createApp({
    data(){
        return{
            output: '',
            confirmOutput: ''
        };  
    },
    
    methods: {
        buttonPressed(){
            alert("Button Pressed");
        },

        getText(event){
            this.output = event.target.value;
        },

        getConfirmText(event){
            this.confirmOutput = event.target.value;
        }
    }
});

app.mount('#assignment');