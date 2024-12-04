<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="input"> Name </label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label for="input">  Number </label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label for="input"> Email Address </label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Submit Entry</button>
        </div>
    </form>
</template>

<script>
    export default{
        emits: ['add-contact'],
        data() {
            return {
                enteredName: "",
                enteredPhone: "",
                enteredEmail: "",
            };
        },
        methods:{
            submitData(){
                this.$emit(
                    'add-contact', 
                    this.enteredName, 
                    this.enteredPhone,
                    this.enteredEmail, 
                );
            },
        }
    }
</script>

<style scoped>
    #app input {
    font: inherit;
    padding: 0.15rem;
    }
    #app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
    }
    #app form div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }
</style>