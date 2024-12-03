const app = Vue.createApp({
    data(){
        return {
          inputClass: "",
          paraVisible: true,
          inputBGColor: ''
        };
    },
    methods:{
        toggleParagraphVisibility(){
            this.paraVisible = !this.paraVisible;
        }
    },
    computed:{
        paraClass(){
            return{
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paraVisible,
                hidden: !this.paraVisible
            }
        }
    }
});

app.mount("#assignment");