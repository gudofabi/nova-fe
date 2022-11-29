<template>
  <div class="relative">
    <v-text-field
        label="Search"
        variant="outlined"
        prepend-inner-icon="fa:fas fa-search"
        v-model="searchText"
        @input = "onChange"
    ></v-text-field>
      <v-table>
          <thead>
          <tr>
              <th class="text-left" 
              v-for="item in headers"
              :key="item">
              {{ item }}
              </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in datas"
              :key="item.name"
          >
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
          </tr>
          </tbody>
      </v-table>
      <pagination :data="datas" @pagination-change-page="getResults" />
  </div>
</template>

<script>
import { TailwindPagination   } from 'laravel-vue-pagination';
// import axios from 'axios';

export default {
  name: 'TableComponent',
  components: {
    'pagination': TailwindPagination 
  },
  data () {
    return {
      page: 1,
      pageSize: 0,
      headers: null,
      datas: [],
      searchText: '',
    }
  },
  created(){
    this.getResults();
  },
  methods:{
    onChange () {
      console.log([{
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
            }].indexOf('KitKat'));
    },
    getResults(page = 1) {
          // axios.get('/employee?page=' + page)
          //     .then(response => {
          //       console.log(response);
          //         this.datas = response.data;
          //     });
      }
  }
}
</script>

<style>
</style>