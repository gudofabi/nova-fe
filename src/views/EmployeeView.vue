<template>
    <div>
        <h1>Employee Records</h1>
    </div>
    <v-row class="px-2 px-md-10 pt-5 pt-md-10">
            
        <v-col  cols="12" md="6">
            <SampleForm />
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
