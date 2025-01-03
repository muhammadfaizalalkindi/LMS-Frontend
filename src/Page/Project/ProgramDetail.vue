<template>
  <section class="mx-8 my-4 flex flex-col space-x-2">
    <div>
      <CourseCard />
    </div>
    <div class="flex flex-col sm:flex-row gap-2 max-w-screen m-8">
      <div class="w-full">
        <LinkZoom />
      </div>
      <div class="w-full">
        <KehadiranStudents />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getCourseById } from '@/api/course'
import CourseCard from '@/components/Section/Homepage/CourseCard.vue';
import LinkZoom from '@/components/Section/MyProgram/LinkZoom.vue';
import KehadiranStudents from '@/components/Section/MyProgram/KehadiranStudents.vue'

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
