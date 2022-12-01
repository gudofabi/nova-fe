<template>
  <v-app>
    
    <v-navigation-drawer
        v-model="data_isOpen"
        permanent
        v-if="comp_authenticated"
    >
        <template v-slot:prepend>
            <h4 class="py-5 pl-5">Novadeci</h4>
            <v-divider></v-divider>
        </template>

        <NavigationDrawerLinks />

    </v-navigation-drawer>

    <v-main>
      <v-responsive>
        <v-container fluid class="mx-auto">
          <router-view></router-view>
        </v-container>
      </v-responsive>
    </v-main>

    <v-app-bar 
      :elevation="0"
      class="border-b"
      :title="comp_pageTitle"
      v-if="comp_authenticated"
    >
        
        <template v-slot:prepend>
          <v-icon icon="fas fa-bars" @click="func_openDrawer"/>
        </template>
        <template v-slot:append>
          <v-list-item
                lines="two"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                title="Jane Smith"
            >
              <template v-slot:append>
                <v-btn
                  size="small"
                  variant="text"
                  icon="fas fa-caret-down"
                ></v-btn>
              </template>
            </v-list-item>
        </template>
    </v-app-bar>
  
  </v-app>
</template>

<script>
import NavigationDrawerLinks from '@/components/Layouts/NavigationDrawerLinks.vue';
import { useAuthStore } from './stores/auth';

export default {
  components: {
    NavigationDrawerLinks
  },

  setup() {
    const authUser = useAuthStore();

    return { authUser }
  },

  data() {
    return {
      data_isOpen: false,

    }
  },

  computed: {
    comp_authenticated() {
      return !this.authUser.authenticated; // remove bang sign to hide the navbar and navdrawer
    },

    comp_pageTitle() {
      return `${this.$route.name.toUpperCase()} / Membership`;
    }
  },

  methods: {
    func_openDrawer() {
      
      this.data_isOpen = !this.data_isOpen;
      console.log(this.data_isOpen);
    }
  }
}
</script>

<style>

</style>