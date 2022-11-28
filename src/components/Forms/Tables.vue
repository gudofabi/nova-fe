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
        <v-pagination
        v-model="page"
        :length="6"
        ></v-pagination>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        page: 1,
        pageSize: 0,
        headers: null,
        datas: null
      }
    },
    // mounted () {
    //     if (this.datas) {
    //         this.pageSize = this.datas.length/5
    //     }
    // }
  }
  </script>
  
  <style>
  </style>