<template>
  <v-app>
    
    <v-navigation-drawer
        v-model="data_isOpen"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
        v-if="comp_authenticated"
    >
        <template v-slot:prepend>
            <v-list-item
                lines="two"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                title="Jane Smith"
                subtitle="Logged in"
            ></v-list-item>
            <v-divider></v-divider>
        </template>

        <NavigationDrawerLinks />

    </v-navigation-drawer>

    <v-main>
      <v-responsive>
        <router-view></router-view>
      </v-responsive>
    </v-main>

    <v-app-bar 
      title="Novadeci"
      color="teal-darken-1"
      image="https://picsum.photos/1920/1080?random"
      v-if="comp_authenticated"
    >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        
        <template v-slot:prepend>
          <v-icon icon="fas fa-bars" @click="func_openDrawer"/>
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