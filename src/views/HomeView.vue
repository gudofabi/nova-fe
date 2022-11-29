<template>
    <v-row class="px-2 px-md-10 pt-5 pt-md-10">
            
        <v-col  cols="12" md="6">
            <SampleForm />
        </v-col>

        <v-col  cols="12" md="6">
            <v-card class="px-2 px-md-4 pt-5 pt-md-10 pb-5">
                <TableComponent />
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import TableComponent from '../components/Forms/TableComponent.vue'
import SampleForm from '../components/Home/SampleForm.vue'

export default {
  components: { SampleForm, TableComponent },
  data() {
    return {
    }
  }  
}
</script>

<style lang="scss">

</style>
