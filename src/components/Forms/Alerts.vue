<template>
    <div class="relative">
      <v-alert
          :type="type"
          elevation="2"
      >{{ message }}</v-alert>
    </div>
  </template>
  
  <script>
  export default {
      props: {
        message: {
              type: [String, Number],
              default: 'Successfully added!'
          },
          type: {
              type: String,
              default: 'success'
          }
      },
  
      methods: {
          func_updateInput(event) {
              this.$emit("update:message", event.target.value);
          },
      }
  }
  </script>
  
  <style>
  .v-alert {
    position: fixed;
    right: 0;
    top: 100px;
    transform: translate(-50%, -50%);
    margin: 0 auto; 
   }
  </style>