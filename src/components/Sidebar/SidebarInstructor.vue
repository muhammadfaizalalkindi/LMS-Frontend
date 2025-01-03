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
        <div class="h-full bg-white text-white sidebar relative z-50 shadow">
            <div class="sidebar h-full">

                <!-- Logo-->
                <div class="p-4">
                    <div class="flex  justify-center items-center">
                        <div>
                            <img src="@/assets/logo.png" class="h-12" alt="Logo">
                        </div>
                        <div>
                            <h1 class="text-xl text-gray-700 font-bold">EduNess</h1>
                        </div>
                    </div>
                </div>
                <!-- menu sidebar -->
                <div class="overflow-y-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
                    <div class="text-gray-700">
                        <router-link to="/instructor/dashboard"
                            class="flex items-center cursor-pointer p-4 pr-16  hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'dashboard' }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 mr-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                            Dashboard
                        </router-link>

                        <router-link to="/instructor/programdosen"
                            class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'ProgramDosen' }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 mr-4">
                                <path stroke-divnecap="round" stroke-divnejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            My Program
                        </router-link>

                        <router-link to="/instructor/permintaan"
                            class="flex items-center text-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'ProgramPermintaan' }">
                            <i class="fa-regular fa-square-check w-5 h-5 mr-4"></i>
                            Permintaan
                        </router-link>

                        <router-link to="/instructor/program" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'BuatProgram' }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 mr-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            Program
                        </router-link>

                        <router-link to="/instructor/createcourse"
                            class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'CreateCourse' }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 mr-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                            </svg>
                            Course
                        </router-link>

                        <router-link to="/instructor/projects"
                            class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'instructorProject' }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 mr-4" viewBox="0 0 16 16">
                              <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                              <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
                            </svg>
                            Projects
                        </router-link>
                        <router-link to="/instructor/setting"
                            class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'SettingPage' }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 mr-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            Settings
                        </router-link>
                        <router-link to="/" class="flex items-center cursor-pointer p-4 pr-4 hover:bg-secondary hover:text-white"
                            :class="{ 'bg-secondary text-white': activePage === 'SignOut' }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-5 h-5 mr-4">
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

            if (to.path.includes('/myclass')) {
                this.activePage = 'MyClass';
                this.updatePageTitle('My Class');
            } else if (to.path.includes('/instructor/programdosen')) {
                this.activePage = 'ProgramDosen';
            } else if (to.path.includes('/instructor/permintaan')) {
                this.activePage = 'ProgramPermintaan';
            } else if (to.path.includes('/instructor/createcourse')) {
                this.activePage = 'CreateCourse';
            } else if (to.path.includes('/browser')) {
                this.activePage = 'BrowseProgram';
            } else if (to.path.includes('/instructor/setting')) {
                this.activePage = 'SettingPage';
                this.updatePageTitle('Setting');
            } else if (to.path.includes('/instructor/program')) {
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
