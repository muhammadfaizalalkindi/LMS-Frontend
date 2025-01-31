<template>
  <div class=" flex flex-row-reverse">
    <!-- toggle -->
    <div class="my-6 mx-4 sm:hidden block">
      <button @click="toggleSidebar"
        class="block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          class="w-8 h-8 rounded-md  solute left-0 transition-transform duration-300 transform sidebar-icon">
          <path fill-rule="evenodd"
            d="M4 6a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
        </svg>
      </button>
    </div>
    <div class="h-full text-white bg-white sidebar relative z-50 shadow">
      <div class="sidebar h-full">

        <!-- Logo-->
        <div class="p-4">
          <div class="flex gap-2 justify-center items-center">
            <div>
              <img src="@/assets/logo.png" class="h-12 mr-2" alt="Logo">
            </div>
            <div>
              <h1 class="text-xl text-gray-700 font-bold">EduNess</h1>
            </div>
          </div>
        </div>
        <!-- menu sidebar -->
        <div class="overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
          <div class="text-gray-700">
            <router-link to="/user/dashboard" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
              :class="{ 'bg-primary': activePage === 'dashboard' }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              Dashboard
            </router-link>
            <router-link to="/user/my-program" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
              :class="{ 'bg-primary': activePage === 'MyProgramIndex' }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 mr-4">
                <path stroke-divnecap="round" stroke-divnejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              My Program
            </router-link>

            <router-link to="/user/browser" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
              :class="{ 'bg-primary': activePage === 'BrowseProgram' }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Browser Program
            </router-link>

            <router-link to="/user/projects"
                class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
                :class="{ 'bg-primary text-white': activePage === 'userProject' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 mr-4" viewBox="0 0 16 16">
                  <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
                </svg>
                Projects
            </router-link>

            <router-link to="/user/notifications"
                class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
                :class="{ 'bg-primary text-white': activePage === 'userNotification' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone w-5 h-5 mr-4" viewBox="0 0 16 16">
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
                </svg>
                Notification
            </router-link>

            <router-link to="/user/setting" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
              :class="{ 'bg-primary': activePage === 'SettingPage' }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Settings
            </router-link>

            <router-link to="/" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-primary"
              :class="{ 'bg-primary': activePage === 'SignOut' }">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-4">
                <path fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
              Sign Out
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'MainSidebar',
  props: ['userRole'],
  data() {
    return {
      isSidebarOpen: true, // Atur menu sidebar terbuka secara default
      activePage: 'dashboard',
      pageTitle: 'Dashboard'
    };
  },

  computed: {
    isInstructor() {
      return this.userRole === 'instructor';
    },

    sidebarClass() {
      return {
        'sidebar': true,
        'hidden': !this.isSidebarOpen, // Sembunyikan menu sidebar jika tidak terbuka
        'block': !this.isSmallScreen,
        'hidden sm:block': this.isSidebarOpen// Tampilkan menu sidebar dalam ukuran md dan sm
      };
    }
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Ubah status menu sidebar saat tombol toggle diklik
      const sidebar = document.querySelector('.sidebar'); // Pilih elemen menu sidebar
      if (this.isSidebarOpen) {
        sidebar.classList.remove('hidden'); // Hapus kelas 'hidden' untuk menampilkan menu sidebar
      } else {
        sidebar.classList.add('hidden'); // Tambahkan kelas 'hidden' untuk menyembunyikan menu sidebar
      }
    },
    updatePageTitle(title) {
      this.pageTitle = title; // Update judul halaman
      this.$emit('page-title-updated', title);
    }
  },

  watch: {
    '$route'(to) {
      const pageTitle = to.meta.title || 'Dashboard';
      this.updatePageTitle(pageTitle);

      if (to.path.includes('/user/myclass')) {
        this.activePage = 'MyClass';
        this.updatePageTitle('My Class');
      }else if (to.path.includes('/browser')) {
        this.activePage = 'BrowseProgram';
      }else if (to.path.includes('/setting')) {
        this.activePage = 'SettingPage';
        this.updatePageTitle('Setting');
      } else if (to.path.includes('/program')) {
        this.activePage = 'BuatProgram';
        this.updatePageTitle('Program');
      } else if (to.path.includes('/menu')) {
        this.activePage = 'SignOut';
      } else {
        this.activePage = 'dashboard';
      }
    }
  }
}
</script>

<style scoped>
/* icon toggle */
.sidebar-open .sidebar-icon {
  transform: translateX(100%);
  /* Geser ikon ke kanan saat sidebar terbuka */
}

/* Styling for Sidebar */
.sidebar {
  height: 100vh;
  /* Tinggi penuh */
}

.overflow-y-auto {
  overflow-y: auto;
  /* Mengaktifkan scroll jika konten lebih panjang dari tinggi layar */
}
</style>
