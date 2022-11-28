import { defineStore } from 'pinia';
import authRepository from '../api/auth';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
    }),
    getters: {
        authUser: state => state.user,
        authenticated: state => state.user !== null,
    },
    actions: {

        async login(params) {
            await authRepository.createSession();
            const { data } = await authRepository.login(params);
            this.user = data.user;
            sessionStorage.user = JSON.stringify(data.user)
            sessionStorage.access_token = data.access_token
        },

        async logout() {
            await authRepository.logout();
            this.user = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('access_token');
        }
    },
    
})