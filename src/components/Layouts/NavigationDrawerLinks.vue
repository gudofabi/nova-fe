<template>
    <v-list class="text-body-2">
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item active-color="#00B85D" @click="$router.push('/')" title="Inbox" value="inbox" prepend-icon="fas fa-envelope"></v-list-item>
        <v-list-item active-color="#00B85D" title="Supervisors" value="supervisors" prepend-icon="fas fa-user-tie"></v-list-item>
        <v-list-item active-color="#00B85D" title="Clock-in" value="clockin" prepend-icon="fas fa-clock"></v-list-item>

        <v-list-group value="users">

            <template v-slot:activator="{ props }">
                <v-list-item
                    density="compact" 
                    active-color="#00B85D" 
                    v-bind="props"
                    prepend-icon="fas fa-users"
                    title="Users"
                ></v-list-item>
            </template>

            <v-list-item active-color="#00B85D" title="Loaner" value="loaner" prepend-icon="fas fa-sack-dollar"></v-list-item>
            <v-list-item active-color="#00B85D" title="Agent" value="agent" prepend-icon="fas fa-user-tie"></v-list-item>
            
        </v-list-group>

        <v-list-group value="setting">

            <template v-slot:activator="{ props }">
                <v-list-item
                    density="compact" 
                    active-color="#00B85D" 
                    v-bind="props"
                    prepend-icon="fas fa-gear"
                    title="Settings"
                ></v-list-item>
            </template>

            <v-list-item active-color="#00B85D" title="Loaner" value="loaner" prepend-icon="fas fa-sack-dollar"></v-list-item>
            <v-list-item active-color="#00B85D" title="Agent" value="agent" prepend-icon="fas fa-user-tie"></v-list-item>

        </v-list-group>

        <v-list-item active-color="#00B85D" value="about" @click="$router.push('/about')">
            <template v-slot:prepend>
                <v-icon icon="fas fa-circle-info"></v-icon>
            </template>
            <v-list-item-title v-text="`About`"></v-list-item-title>
        </v-list-item>

    </v-list>
</template>

<script>
</script>