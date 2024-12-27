<template>
  <section v-if="course" class="mx-8 my-4 flex flex-col md:flex-row space-x-2">
    <!-- Sisi kiri -->
    <div class="flex flex-col space-y-8">
      <!-- Video -->
      <div class="relative">
        <video controls class="w-full h-80">
          <source src="@/assets/video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <!-- Tombol play -->
        <button class="absolute inset-0 flex text-center items-center justify-center w-full h-full">
          <!-- Icon play -->
          <!-- <p class="bg-blue-500 rounded-lg text-white py-2 px-8 text-md hover:opacity-90 duration-300">Login
                  </p> -->
        </button>
      </div>
      <!-- Tentang -->
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-4">
          <h1 class="text-2xl font-medium font-serif">Tentang</h1>
          <p class="text-md sm:text-sm font-light font-poppins text-justify mt-4">
            {{ course.description }}
          </p>
        </div>
        <!-- Gambar -->
        <div class="my-12">
          <img src="@/assets/course.png" alt="">
        </div>
        <!-- Target -->
        <div>
          <h1 class="text-2xl font-medium font-serif ">Target dan Sasaran siswa</h1>
          <div class="text-md sm:text-sm font-light font-poppins text-justify mt-4">
            <ol v-if="course.target_audience.length" class="list-decimal mx-4">
              <li v-for="(target, i) in course.target_audience" :key="i">{{ target }}</li>
            </ol>
            <div v-else>-</div>
          </div>
        </div>

        <!-- Spesifikasi -->
        <div>
          <h1 class="text-2xl font-medium font-serif ">Spesifikasi & Software</h1>
          <div class="text-md sm:text-sm font-light font-poppins text-justify mt-4">
            <ol class="list-decimal mx-4">
              <li>PC/Laptop dengan minimal 1 GB Ram dan 2 GB free disk</li>
              <li>Browser</li>
              <li>Text Editor (VsCode)</li>
              <li>Akses internet</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- Sisi kanan -->
    <div class="w-full my-8 sm:my-0 flex flex-col gap-8">
      <div class="mx-2">
        <div class="border shadow rounded-md">
          <h3 class="flex py-4 px-5 items-start justify-start">
            <div class="flex">
              <span class="text-md font-medium text-gray-400 line-through">${{ course.price }}</span>
              <span class="ms-2 text-md font-medium text-green-600 ">Free</span>
            </div>
          </h3>

          <div class="pt-2 border p-4" id="filter-section-mobile-0">
            <div class="flex flex-col space-y-4 my-4">
              <div class="flex justify-between">
                <div class="flex flex-row gap-2 justify-center items-center text-center">
                  <i class="fa-regular fa-clock text-gray-400"></i>
                  <p class="text-sm text-gray-400">Course duration</p>
                </div>
                <p class="text-sm text-gray-400 ">{{ course.total_duration }} days</p>
              </div>
              <div class="flex justify-between">
                <div class="flex flex-row gap-2 justify-center items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5  text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <p class="text-sm text-gray-400">Course</p>
                </div>
                <p class="text-sm text-gray-400 ">{{ course.chapters ? course.chapters.length : 0 }}</p>
              </div>
              <div class="flex justify-between">
                <div class="flex flex-row gap-3 justify-center items-center text-center">
                  <i class="ml-1 fa-regular fa-user text-gray-400"></i>
                  <p class="text-sm text-gray-400">Student Enroll</p>
                </div>
                <p class="text-sm text-gray-400 ">{{ course.total_enrollments }}</p>
              </div>
              <div class="flex justify-between">
                <div class="flex flex-row gap-4 justify-center items-center text-center">
                  <i class="ml-1 fa-regular fa-file-lines text-gray-400"></i>
                  <p class="text-sm text-gray-400">Language</p>
                </div>
                <p class="text-sm text-gray-400 ">Indonesia</p>
              </div>
            </div>
          </div>


          <div @click="openCourse" type="button"
            class="btn-primary rounded-2xl my-4 mx-12 justify-center text-center items-center cursor-pointer">
            <p class="text-md text-white font-medium py-2 px-1">Ikut</p>
          </div>

        </div>
      </div>
      <div class="mx-2">
        <div class="border shadow rounded-md">
          <h3 class="text-md py-4 px-5 items-start justify-start">
            Instructor
          </h3>
          <template v-if="course.course_instructors && course.course_instructors.length">
            <div class="pt-2 border p-4" id="filter-section-mobile-0">
              <div class="flex flex-col space-y-4 p-4 bg-gray-200">
                <div class="flex gap-2 items-center">
                  <div>
                    <img src="@/assets/profil.png" alt="Profile" class="size-6 md:size-8 rounded-full border-2">
                  </div>
                  <div class="flex flex-col">
                    <div class="text-sm text-gray-800">{{ course.course_instructors[0].instructor.name }}</div>
                    <div class="text-xs text-gray-500">{{ course.course_instructors[0].instructor.email }}</div>
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs font-semibold text-gray-800">Deskripsi</h3>
                  <div class="flex flex-col">
                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                    <h3 class="text-xs text-gray-800">Bekerja di PT arab Gila </h3>
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs font-semibold text-gray-800">Telepon</h3>
                  <h3 class="text-xs text-gray-800">{{ course.course_instructors[0].instructor.phone_number }}</h3>
                </div>
              </div>
            </div>
          </template>
          <template v-else>-</template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getCourseById } from '@/api/course'

const route = useRoute()

const loading = ref(false)
const course = ref(null)
const error = ref(null)

watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  console.log('fetch', id)
  error.value = course.value = null
  loading.value = true

  try {
    const { data } = await getCourseById(id)
    course.value = data.data
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Gaya CSS khusus untuk komponen ini */
</style>
