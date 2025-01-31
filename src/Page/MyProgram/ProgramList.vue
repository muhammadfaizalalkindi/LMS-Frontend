<template>
  <component :is="viewComponent" :items="items" @selected="($event) => router.push(`my-program/${$event.id}`)" />
</template>

<script setup>
import ProgramGrid from '@/components/MyProgram/ProgramGrid.vue'
import { computed, onMounted, ref } from 'vue'
import { getMyCourses } from '@/api/course'
import { useRouter } from 'vue-router'

const items = ref([])
const loading = ref(false)
const router = useRouter()
const viewType = ref('grid')
const viewComponent = computed(()=> {
  const _views = {
    'grid': ProgramGrid
  }
  return _views[viewType.value]
})

onMounted(() => {
  load()
})

function load() {
  loading.value = true
  getMyCourses().then(res => {
    if(res.status === 200) {
      items.value = res.data.data
    }
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    loading.value = false
  })
}
</script>
