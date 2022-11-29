<template>
    <div class="relative">
    <v-textarea
        solo
        name="input-7-4"
        :label="label"
        :value="modelValue"
        :error-messages="comp_errorMessages"
        @input="func_updateInput"
        :variant="variant"
    ></v-textarea>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          modelValue: {
              type: [String, Number],
              default: ''
          },
          label: {
              type: String,
              default: 'Label'
          },
          clearable: {
              type: Boolean,
              default: true
          },
          errors: {
              type: [Array, Object],
              default: () => {}
          },
      },
  
      computed: {
          comp_errorMessages() {
              const error_array = [];
              this.errors.forEach(error => error_array.push(error.$message));
              return error_array;
          }
      },
  
      methods: {
          func_updateInput(event) {
              this.$emit("update:modelValue", event.target.value);
          },
      }
  }
  </script>
  
  <style>
  
  </style>