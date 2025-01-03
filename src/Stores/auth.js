import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import { toRef } from "vue";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    getCurrentUser() {
      const user = useStorage('auth-user')
      console.log('user', user.value)
      this.user = user.value ? JSON.parse(user.value) : user
      return toRef(this.user)
    }
  }
})

