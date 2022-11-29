<template>
    <div>
        <h1>Employee Records</h1>
    </div>
    <v-row class="px-2 px-md-10 pt-5 pt-md-10">
            
        <v-col  cols="12" md="6">
            <tables ref="Tables"/>
        </v-col>
    </v-row>
</template>

<script>
import Tables from '../components/Forms/TableComponent.vue'

export default {
  components: { Tables },
  data() {
    return {
      data: [
          {
            name: 'Frozen Yogurt',
            description: 159,
          },
          {
            name: 'Ice cream sandwich',
            description: 237,
          },
          {
            name: 'Eclair',
            description: 262,
          },
          {
            name: 'Cupcake',
            description: 305,
          },
          {
            name: 'Gingerbread',
            description: 356,
          },
          {
            name: 'Jelly bean',
            description: 375,
          },
          {
            name: 'Lollipop',
            description: 392,
          },
          {
            name: 'Honeycomb',
            description: 408,
          },
          {
            name: 'Donut',
            description: 452,
          },
          {
            name: 'KitKat',
            description: 518,
          },
          {
            name: 'Frozen Yogurt',
            description: 159,
          },
          {
            name: 'Ice cream sandwich',
            description: 237,
          },
          {
            name: 'Eclair',
            description: 262,
          },
          {
            name: 'Cupcake',
            description: 305,
          },
          {
            name: 'Gingerbread',
            description: 356,
          },
          {
            name: 'Jelly bean',
            description: 375,
          },
          {
            name: 'Lollipop',
            description: 392,
          },
          {
            name: 'Honeycomb',
            description: 408,
          },
          {
            name: 'Donut',
            description: 452,
          },
          {
            name: 'KitKat',
            description: 518,
          },
          
        ],
        headers: [
            'Name', 'Description'
        ]
    }
  },
  mounted () {
    this.$refs.Tables.datas = this.data
    this.$refs.Tables.headers = this.headers
  }  
}
</script>

<style lang="scss">

</style>
