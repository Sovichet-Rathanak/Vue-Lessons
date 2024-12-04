<template>
  <li>
    <h2>{{ name }} {{ isFave ? '(Favorite)' : ' ' }}</h2>
    <button @click="toggleFave">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="deleteContact">Delete Contact</button>
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
  emits:['toggle-fave', 'delete-contact'],
  // emits:{
  //   'toggle-favorite': function(id){
  //     if(id){
  //       return true;
  //     }else{
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },
  props:{
    id:{
      type: String,
      required: true
    },
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
      required: true,
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
      this.$emit('toggle-fave', this.id);
    },
    deleteContact(){
      this.$emit('delete-contact', this.id);
    }
  }
};
</script>