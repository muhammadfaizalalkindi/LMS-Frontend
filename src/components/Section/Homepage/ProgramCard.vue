<template>
    <div class="justify-center items-center m-4">
      <!-- <div class="toggle flex mb-4 justify-between text-center items-center">
        <div>
          <h1 class="sm:text-lg text-md font-bold">Best Courses</h1>
        </div>
        <div @click="toggleShowAll" class="cursor-pointer border border-gray-200 text-gray-500 rounded-full p-2 text-sm font-light">
          All Kategories
        </div>
      </div> -->
      <!-- Wrapper untuk kartu-kartu -->
      <div :class="gridClass" class="grid gap-4 justify-center items-center">
        <!-- Course Cards -->
        <div v-for="(course, id) in displayedCourse" :key="id" class="flex-shrink-0">
          <div class="h-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md items-center justify-center">
            <!-- Mengatur ukuran gambar -->
            <div>
              <img class="object-cover small-image rounded-t-lg" :src="course.image" alt="Course Image" />
            </div>
            <!-- konten -->
            <div class="flex flex-col py-4 space-y-4">
              <div class="flex flex-col space-y-2">
                <!-- <p class="text-sm tracking-tight text-gray-400 px-4 truncate">{{ course.deskripsi }}</p> -->
                <p class="px-4 font-semibold sm:text-md text-sm text-gray-700">{{ course.title }}</p>
              </div>
              <div class="w-full h-auto px-4 ">
                <ProgressBar class="h-auto" :progress="course.progress" />
              </div>
              <div class="border-t-2 border-gray-300 px-4 pt-4 items-center text-center">

                  <!-- Menggunakan method openCourse saat tombol diklik -->
                  <button @click="openCourse(course.id)"
                    class="rounded-md w-full btn-primary tonal py-2 px-4 shadow-md transition-colors duration-200 font-semibold text-sm">
                    Continue
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import course from '@/assets/course.png'
  import ProgressBar from '@/components/Progres/ProgressBio';

  export default {
    name: 'ProgramCard',
    components: {
      ProgressBar,
    },
    data() {
      return {
        showAll: false,
        course: [
          {
            id: 1,
            image: course,
            title: 'Pemrograman Web',
            progress: 40,
          },
          //menambah program
        ]
      };
    },
    computed: {
      displayedCourse() {
        if (this.showAll) {
          return this.course;
        } else {
          const Count = 1;
          const smCount = 2;
          const mdCount = 4;
          const lgCount = 5;
          if (window.innerWidth >= 1024) {
            return this.course.slice(0, lgCount);
          } else if (window.innerWidth >= 768) {
            return this.course.slice(0, mdCount);
          } else if (window.innerWidth >= 360) {
            return this.course.slice(0, smCount);
          } else {
            return this.course.slice(0, Count);
          }
        }
      },
      gridClass() {
        return {
          'grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5': true,
          'grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-5': !this.showAll
        };
      }
    },
    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
      },
      openCourse(programId) {
        this.$router.push({ name: 'MyProgram', params:{ programId}});
      }
    },
  }
  </script>

  <style scoped>
  /* Custom CSS untuk membatasi jumlah baris berdasarkan ukuran layar */
  @media (min-width: 1024px) {
    .grid {
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .grid {
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 767px) {
    .grid {
      grid-template-rows: repeat(3, minmax(0, 1fr));
    }
  }
  </style>
