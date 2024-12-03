const app = Vue.createApp({
    data(){
        return {
          tasks: '',
          tasks_list: [],
          visible: true
        };
    },
    computed:{
        buttonCaption(){
            return this.visible ? "Hide" : "Show";
        }
    },
    methods:{
        addTask(){
            this.tasks_list.push(this.tasks);
        },
        ShowHide(){
            this.visible = !this.visible;
        }
    }
})

app.mount("#assignment");