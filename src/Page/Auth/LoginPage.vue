<template>
  <div class="flex min-h-full flex-col justify-center lg:p-0">
    <div class="p-8 rounded-lg justify-center items-center">

      <div class="flex gap-1 items-center justify-center text-center pb-4">
        <img class="h-16 w-auto" src="@/assets/logo.png" alt="Logo">
        <div class="font-bold text-4xl">Eduness</div>
      </div>

      <!-- Logo -->

      <div class=" flex text-center justify-center items-center ">

        <div @click="userType = 'student'"
          :class="{ 'bg-primary': userType === 'student', 'hover:bg-primary': userType !== 'student' }"
          class="py-2.5 px-12 shadow-sm shadow-gray-300  cursor-pointer">Students</div>
        <div @click="userType = 'instructor'"
          :class="{ 'bg-primary': userType === 'instructor', 'hover:bg-primary': userType !== 'instructor' }"
          class="py-2.5 px-12 shadow-sm shadow-gray-300 cursor-pointer">Instructor</div>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-sm pt-12 pb-4">
        <h2 class="text-center text-2xl font-bold tracking-tight text-gray-900">Sign in</h2>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSubmit" class="space-y-4" action="#" method="POST">
          <div>
            <label class="block text-sm font-semibold leading-6 text-gray-500">Email address</label>
            <div>
              <input v-model="email" type="email" autocomplete="email" placeholder="example@gmail.com" required
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-semibold leading-6 text-gray-500">Password</label>
            <div>
              <input v-model="password" type="password" autocomplete="current-password" placeholder="password" required
                class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
            <div class="flex items-end justify-between mt-2">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-blue-50 focus:ring-3 focus:ring-blue-300"
                    required="">
                </div>
                <div class="ml-2 text-sm">
                  <label for="terms" class="font-light text-gray-500">Remember me</label>
                </div>
              </div>
              <div class="text-sm">
                <a href="#" class="font-light text-indigo-600 hover:underline">Forgot password?</a>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center text-center">
            <button type="submit"
              class="rounded-full min-w-40 btn-primary px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              in</button>
          </div>

          <div class="justify-center text-center lg:pt-12 pt-4">
            <div class="flex items-center justify-center">
              <div class="border-b border-gray-300 flex-grow mr-4"></div>
              <p class="text-sm text-gray-500">Sign up with</p>
              <div class="border-b border-gray-300 flex-grow ml-4"></div>
            </div>

            <button type="button"
              class="text-black bg-white shadow hover:bg-gray-100 hover:text-black font-medium rounded-full text-sm py-2 px-4 my-4 inline-flex items-center gap-2">
              <img class="h-6" src="@/assets/Google.png" alt="google">
              Google
            </button>

            <div class="flex justify-center text-center items-center">
              <div class="mt-auto text-center text-sm text-gray-500">
                Not an account?
                <router-link :to="{ name: 'RegistrasiPage' }"
                  class=" font-semibold leading-6 text-[#564FFD] hover:text-indigo-500 hover:underline text-sm"
                  aria-current="page" :class="{ 'bg-blue-500': activePage === 'LoginPage' }">Sign up</router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { login as loginPost } from '@/Service/Api'
import { useAuthStore } from '@/Stores/auth';

export default {
  data() {
    return {
      userType: 'student',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Simulasi respons login sukses
        const mockResponse = {
          data: {
            message: 'Login success',
            data: {
              userType: this.userType,
              token: 'dummy_token'
            }
          }
        };

        // Simulasi delay agar terasa seperti real request
        const { data } = await loginPost({email: this.email, password: this.password})

        if (data?.message === 'Login success') {

          const { token, role, id, name, email, phone_number, image } = data.data
          const userType = role ? role.toLowerCase() : null;
          const store = useAuthStore()

          store.setToken(token)
          store.setUser({ role, id, name, email, phone_number, image})

          if (userType === 'student' || userType === 'user') {
            this.$router.push('/user/dashboard');
          } else if (['super_admin', 'admin', 'instructor'].includes(userType)) {
            this.$router.push('/instructor/dashboard');
          } else {
            console.error('Invalid role:', userType);
          }
        } else {
          console.error('Login failed:', mockResponse.data.message);
          alert('Login failed. Please check your credentials and try again.');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    }

  }
};
</script>
