<template>
  <div class="home-form">
    <v-card class="px-2 px-md-4 pt-5 pt-md-10 pb-5">
        <v-row>
            <v-col cols="12" md="6">
                <TextInputField
                    label="Email"
                    type="email"
                    v-model="data_form.email"
                    :errors="v$.email.$errors"
                />
            </v-col>
            <v-col cols="12" md="6">
                <TextInputField
                    label="Mobile Number"
                    v-model="data_form.mobile_number"
                    :errors="v$.mobile_number.$errors"
                />
            </v-col>
        </v-row>
        <TextInputField
            label="Address"
            v-model="data_form.address"
            :errors="v$.address.$errors"
        />
        
        <CheckboxField 
            label="Do you agree?"
            v-model="data_form.agree"
            :errors="v$.agree.$errors"
        />

        <CheckboxField 
            label="Accepting Terms and Condition"
            v-model="data_form.terms"
            :errors="v$.terms.$errors"
        />

        <div class="d-flex justify-end">
            <v-btn variant="tonal">Cancel</v-btn>
            <v-btn class="bg-green-darken-2 ml-2"
                @click="func_submit"
            >Submit</v-btn>
        </div>
    </v-card>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity';

import TextInputField from '../Forms/TextInputField.vue';
import CheckboxField from '../Forms/CheckboxField.vue';

import useVuelidate from '@vuelidate/core'
import { required, email, helpers, sameAs } from '@vuelidate/validators'
import { computed } from '@vue/runtime-core';

// FORM ----------------------------------------------
const data_form = reactive({
    email: '',
    mobile_number: '',
    address: '',
    agree: false,
    terms: false
})

// VALIDATIONS ----------------------------------------
const data_rules = computed(() => ({
    email: { required: helpers.withMessage('Please provide a valid email',required), email },
    mobile_number: { required: helpers.withMessage('Please provide a valid mobile number',required) },
    address: { required: helpers.withMessage('Please provide a valid Address',required) },
    agree: { sameAs: helpers.withMessage('You must agree',sameAs(true)) },
    terms: { sameAs: helpers.withMessage('You must accept the Terms and Conditions',sameAs(true)) },
}))

// USE VUEVALIDATE 
const v$ = useVuelidate(data_rules, data_form);

// SUBMIT ---------------------------------------------
const func_submit = async () => {
    const result = await v$.value.$validate()

    if (!result) {
        // notify user data_form is invalid
        console.log('please check the errors')
        return;
    }
    console.log(data_form)
}

</script>

<style>

</style>