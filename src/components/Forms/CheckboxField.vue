<template>
  <div class="checkbox">
    <v-checkbox
      :label="label"
      v-model="data_checked"
      :error-messages="comp_errorMessages"
      @change="func_updateInput"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: 'Label'
        },
        errors: {
            type: [Array, Object],
            default: () => {}
        }
    },

    data() {
        return {
            data_checked: false
        }
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
            this.$emit("update:modelValue", event.target.checked);
            this.data_checked = event.target.checked;
        }
    }
}
</script>

<style>

</style>