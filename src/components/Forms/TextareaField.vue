<template>
    <v-textarea
        :label="label"
        :value="modelValue"
        :error-messages="comp_errorMessages"
        @input="func_updateInput"
        :placeholder="placeholder"
    ></v-textarea>
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
        placeholder: {
            type: String,
            default: ''
        },
        errors: {
            type: [Array, Object],
            default: () => {}
        },
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
        },
    }
}
</script>

<style>

</style>