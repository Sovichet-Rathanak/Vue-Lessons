<template>
  <li>
    <h2>{{ name }} {{ friendIsFave === true ? '(Favorite)' : ' ' }}</h2>
    <button @click="toggleFave">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props:{
    name:{
      type: String,
      required: true
    },
    phoneNumber:{
      type: String,
      required: true
    },
    emailAddress:{
      type: String,
      required: true
    },
    isFave:{
      type: Boolean,
      required: false,
      default: false,
      validator: function(value){
        return value === true || value === false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFave: this.isFave
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFave(){
      this.friendIsFave = !this.friendIsFave;   
    }
  }
};
</script>