<template>
  <div class="table-component">
    <v-table
        fixed-header
        :height="height"
    >
        <thead>
            <tr>
                <th v-for="header in headers" :key="header" class="text-left w-25">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <slot name="data"></slot>
        </tbody>
    </v-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        headers: {
            type: [Object, Array]
        },
        height: {
            type: String,
            default: '300px'
        }
    }
})
</script>

<style>

</style>