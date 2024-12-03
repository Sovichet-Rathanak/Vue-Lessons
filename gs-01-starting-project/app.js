Vue.createApp({
    data(){
        return{
            goals: [],
            enteredValue: ""
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');

// 'use strict';
// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = input.value;
//     const listInput = document.createElement('li');
//     listInput.textContent = enteredValue;
//     list.appendChild(listInput);
//     input.value = '';
// }

// button.addEventListener('click', addGoal);