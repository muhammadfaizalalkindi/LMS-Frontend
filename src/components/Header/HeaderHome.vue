<template>
  <div class=" w-full z-50 m-2">
    <header>
      <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click="toggleMobileMenu"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="true">
              <span class="sr-only">Toggle menu</span>
              <!-- Icon -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="false">
                <!-- Icon when menu is closed -->
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                <!-- Icon when menu is open -->
                <path v-else stroke-linecap="round" stroke-linejoin="round"  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="flex flex-1 items-center justify-center text-center sm:items-stretch sm:justify-start ">
            <div class=" flex space-x-2 ga-1 gap-2  items-center justify-center">
              <img class="h-12 w-auto" src="@/assets/logo.png" alt="Your Company">
              <p class="text-xl font-bold text-black">EduNess</p>
            </div>
            <!-- <div class="hidden sm:ml-6 sm:block ml:block items-center justify-center text-center">
              <div class="flex space-x-6 text-center justify-center items-center py-2.5 px-5">
                 Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
                <a href="#Home" class="text-blue-600  block rounded-md text-base font-bold" aria-current="page">Home
                </a>
                <a href="#Course" class="text-black font-bold hover:text-blue-600 rounded-md  text-sm ">
                  Course</a>
                <a href="#About" class="text-black font-bold hover:text-blue-600  rounded-md text-sm ">
                  About us</a>
              </div>
            </div> -->
          </div>

          <div class="hidden sm:block ml:block">
            <!-- view Sign-in and Sign-up buttons in web-->
            <div v-if="!isLoggedIn" class="flex space-x-4">
              <router-link :to="{ name: 'RegistrasiPage' }"
                class="shadow-md rounded-full  items-center cursor-pointer px-4 py-2 hover:bg-primary hover:text-white"
                :class="{ 'bg-blue-500': activePage === '' }" aria-current="page">Sign-up</router-link>
              <router-link :to="{ name: 'LoginPage' }"
                class="btn-primary rounded-full px-4 py-2 text-base font-sm "
                aria-current="page" :class="{ 'bg-blue-500': activePage === 'LoginPage' }">Sign-in</router-link>
            </div>
          </div>

          <!-- user menu button -->
          <button v-if="isLoggedIn" @click="toggleUserMenu"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button" aria-expanded="false">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="@/assets/logo.png" alt="user photo">
          </button>
        </div>
      </div>
    </header>
    <div v-show="isMobileMenuOpen" class="sm:hidden p-4 justify-between items-center text-center" id="mobile-menu">
        <!-- <div class="flex flex-col space-y-1">
          <a href="#Home" class="bg-blue-600 p-2 block rounded-md text-base text-white" aria-current="page">Home</a>
          <a href="#Course" class="shadow-sm p-2 text-black text-base  hover:text-white hover:bg-blue-600 rounded-md ">
            Course</a>
          <a href="#About" class="shadow-sm p-2 text-black text-base hover:text-white hover:bg-blue-600  rounded-md">
            About us</a>
        </div> -->
     
      <!-- view Sign-in and Sign-up buttons in mobile -->
      <div v-if="!isLoggedIn" class="px-4">
        <div class="flex space-x-4 justify-center ">
          <router-link :to="{ name: 'RegistrasiPage' }"
            class="shadow-md rounded-md px-4 py-2 items-center cursor-pointer hover:bg-primary hover:text-white"
            :class="{ 'bg-primary': activePage === '' }" aria-current="page">Sign-up</router-link>
          <router-link :to="{ name: 'LoginPage' }"
            class="btn-primary rounded-md px-4 py-2 text-base font-sm" aria-current="page"
            :class="{ 'bg-primary': activePage === 'LoginPage' }">Sign-in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLog',
  data() {
    return {
      isLoggedIn: false,
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleUserMenu() {
      // Implement user menu toggling logic here
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }

};

</script>

<style></style>