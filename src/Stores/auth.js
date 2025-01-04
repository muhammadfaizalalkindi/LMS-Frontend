import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import { toRef } from "vue";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    AUTH_KEY: 'auth-user',
    AUTH_TOKEN: 'auth-token',
  }),
  actions: {
    getCurrentUser() {
      const user = useStorage(this.AUTH_KEY)
      this.user = user.value ? JSON.parse(user.value) : user
      return toRef(this.user)
    },
    logout() {
      this.destroy()
    },
    setUser(user) {
      const value = typeof user != 'string' ? JSON.stringify(user) : user
      localStorage.setItem(this.AUTH_KEY, value)
      this.user = user
    },
    setToken(token) {
      localStorage.setItem(this.AUTH_TOKEN, token)
      this.token = token
    },
    destroy() {
      localStorage.setItem(this.AUTH_KEY, null)
      localStorage.setItem(this.AUTH_TOKEN, null)
      this.user = null
    }
  }
})

