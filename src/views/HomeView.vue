<template>
    <v-row>
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

    <v-row>
        <v-col>
            <v-card class="">
                <TableComponent :headers="['Name','Email','Address','Message', 'Action']">
                    <template #data>
                        <tr>
                            <td fixed>Johny Depp</td>
                            <td>depp@gmail.com</td>
                            <td>Charlie Chocolate Factory</td>
                            <td>“We are all a great deal luckier than we realize, we usually get what we want - or near enough.”</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td fixed>Johny Depp</td>
                            <td>depp@gmail.com</td>
                            <td>Charlie Chocolate Factory</td>
                            <td>“We are all a great deal luckier than we realize, we usually get what we want - or near enough.”</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td fixed>Johny Depp</td>
                            <td>depp@gmail.com</td>
                            <td>Charlie Chocolate Factory</td>
                            <td>“We are all a great deal luckier than we realize, we usually get what we want - or near enough.”</td>
                            <td></td>
                        </tr>
                    </template>
                </TableComponent>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import SampleForm from '../components/Home/SampleForm.vue'
import TableComponent from '../components/Common/TableComponent.vue';
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
