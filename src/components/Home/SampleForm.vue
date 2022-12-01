<template>
  <div class="home-form">
    <v-card class="px-2 px-md-4 pt-5 pt-md-10 pb-5">
        <v-row>
            <v-col cols="12" md="6">
                <InputField
                    label="Email"
                    type="email"
                    v-model="data_form.email"
                    :errors="v$.email.$errors"
                />
            </v-col>
            <v-col cols="12" md="6">
                <InputField
                    label="Mobile Number"
                    v-model="data_form.mobile_number"
                    :errors="v$.mobile_number.$errors"
                />
            </v-col>
        </v-row>
        <InputField
            label="Address"
            v-model="data_form.address"
            :errors="v$.address.$errors"
        />

        <SelectField 
            label="States"
            :options="states"
            v-model="data_form.states"
            :errors="v$.states.$errors"
            :multiple="true"
        />
        
        <TextareaField
            label="Message"
            v-model="data_form.message"
            :errors="v$.message.$errors"
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
import { reactive, ref } from '@vue/reactivity';

import InputField from '../Forms/InputField.vue';
import TextareaField from '../Forms/TextareaField.vue';
import CheckboxField from '../Forms/CheckboxField.vue';
import SelectField from '../Forms/SelectField.vue';

import useVuelidate from '@vuelidate/core'
import { required, email, helpers, sameAs } from '@vuelidate/validators'
import { computed } from '@vue/runtime-core';

// FORM ----------------------------------------------
const data_form = reactive({
    email: '',
    mobile_number: '',
    address: '',
    states: [],
    terms: false,
    message: ''
})

const states = ref([
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ]);

// VALIDATIONS ----------------------------------------
const data_rules = computed(() => ({
    email: { required: helpers.withMessage('Please provide a valid email',required), email },
    mobile_number: { required: helpers.withMessage('Please provide a valid mobile number',required) },
    address: { required: helpers.withMessage('Please provide a valid Address',required) },
    message: { required: helpers.withMessage('You must provide a message',required) },
    terms: { sameAs: helpers.withMessage('You must accept the Terms and Conditions',sameAs(true)) },
    states: { required: helpers.withMessage('Please select states',required) },
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