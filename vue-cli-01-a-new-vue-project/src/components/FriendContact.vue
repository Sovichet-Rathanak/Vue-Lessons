<template>
    <li>
        <h1>{{ friend.name }}</h1>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide':'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        data(){
            return{
                detailsAreVisible: false,
                friend:{
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '012231 32321',
                        email: 'manuel@gmail.com'
                }
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    };
</script>