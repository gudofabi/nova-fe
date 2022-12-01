<template>
  <v-select
    v-model="data_selected"
    :items="options"
    :label="label"
    :multiple="multiple"
    :hint="hint"
    persistent-hint
    :error-messages="comp_errorMessages"
    @change="func_updateInput"
    variant="outlined"
  ></v-select>
</template>

<script>
export default {
    props: {
        options: {
            type: [Array, Object],
            default: () => {}
        },
        multiple: {
            type: Boolean,
            default: false
        },
        label:{
            type: String,
            default: 'Select'
        },
        selected: {
            type: [Array, Object, String, Number],
            default: () => {}
        },
        errors: {
            type: [Array, Object],
            default: () => {}
        },
        hint: {
            type: String,
            default: 'Pick your favorite'
        },
    },
    data() {
        return {
            data_selected: []
        }
    },
    computed: {
        comp_errorMessages() {
            const error_array = [];
            if(this.errors) {
                this.errors.forEach(error => error_array.push(error.$message));
                return error_array;
            }
        }
    },

    methods: {
        func_updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
            this.data_selected = event.target.value;
        }
    }
}
</script>

<style>

</style>