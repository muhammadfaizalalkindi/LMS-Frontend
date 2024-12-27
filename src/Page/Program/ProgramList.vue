<template>
  <component :is="viewComponent" :items="items" @selected="($event) => router.push(`browser/${$event.id}`)" />
</template>

<script setup>
import ProgramGrid from '@/components/Program/ProgramGrid.vue'
import { computed, onMounted, ref } from 'vue'
import { getCourses } from '@/api/course'
import { useRouter } from 'vue-router'

const items = ref([])
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
  getCourses().then(res => {
    if(res.status === 200) {
      items.value = res.data.data
    }
  })
}
</script>
