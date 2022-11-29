<template>
  <div class="relative">
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
      <Pagination :data="laravelData" @pagination-change-page="getResults" />
  </div>
</template>

<script>
import { TailwindPagination } from 'laravel-vue-pagination';

export default {
  name: 'TableComponent',
  components: {
    'Pagination': TailwindPagination
  },
  data () {
    return {
      page: 1,
      pageSize: 0,
      headers: null,
      laravelData: [],
      datas: [
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
    }
  },
  created(){
    this.getResults();
  },
  methods:{
    getResults(page = 1) {
          // axios.get('/employee?page=' + page)
          //     .then(response => {
          //         this.laravelData = response.data;
          //     });
      }
  }
}
</script>

<style>
</style>