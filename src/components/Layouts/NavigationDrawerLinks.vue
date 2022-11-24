<template>
    <v-list nav>
        <v-list-item @click="$router.push('/')" title="Inbox" value="inbox" prepend-icon="fas fa-envelope"></v-list-item>
        <v-list-item title="Supervisors" value="supervisors" prepend-icon="fas fa-user-tie"></v-list-item>
        <v-list-item title="Clock-in" value="clockin" prepend-icon="fas fa-clock"></v-list-item>

        <v-list-group value="users">

            <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    prepend-icon="fas fa-users"
                    title="Users"
                ></v-list-item>
            </template>

            <v-list-item title="Loaner" value="loaner" prepend-icon="fas fa-sack-dollar"></v-list-item>
            <v-list-item title="Agent" value="agent" prepend-icon="fas fa-user-tie"></v-list-item>
            
        </v-list-group>

        <v-list-group value="setting">

            <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    prepend-icon="fas fa-gear"
                    title="Settings"
                ></v-list-item>
            </template>

            <v-list-item title="Loaner" value="loaner" prepend-icon="fas fa-sack-dollar"></v-list-item>
            <v-list-item title="Agent" value="agent" prepend-icon="fas fa-user-tie"></v-list-item>

        </v-list-group>

        <v-list-item value="about" @click="$router.push('/about')">
            <template v-slot:prepend>
                <v-icon icon="fas fa-circle-info"></v-icon>
            </template>
            <v-list-item-title v-text="`About`"></v-list-item-title>
        </v-list-item>

    </v-list>
</template>

<script>
</script>