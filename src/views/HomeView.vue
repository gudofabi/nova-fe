<template>
    <v-row class="px-2 px-md-10 pt-5 pt-md-10">
            
        <v-col  cols="12" md="6">
            <SampleForm />
        </v-col>

        <v-col  cols="12" md="6">
            <v-card class="px-2 px-md-4 pt-5 pt-md-10 pb-5">
                Sample text here!
                <v-divider></v-divider>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import SampleForm from '../components/Home/SampleForm.vue'

export default {
  components: { SampleForm },
  data() {
    return {
    }
  }  
}
</script>

<style lang="scss">

</style>
