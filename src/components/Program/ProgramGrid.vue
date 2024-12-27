<template>
  <div class="flex flex-col space-y-4 justify-end m-8">
    <div v-if="props.items.length">
      <div :class="gridClass" class="grid gap-4 justify-center items-center">
        <template v-if="props.items.length">
          <div v-for="(item, i) in items" :key="i" class="flex-shrink-0">
            <div @click="openCourse(item)"
              class="h-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md items-center justify-center cursor-pointer">
              <!-- Mengatur ukuran gambar -->
              <div>
                <img class="object-cover small-image rounded-t-lg" :src="courseImage" alt="Course Image" />
              </div>
              <!-- konten -->
              <div class="flex flex-col py-2 space-y-6">
                <div class="flex flex-col space-y-2 min-h-14">
                  <p class="px-4 font-semibold text-xs sm:text-sm md:text-md text-gray-700">{{ item.name }}</p>
                </div>
                <div class="border-t-2 border-gray-300 px-4 pt-2 items-center text-center">
                  <div class="flex space-x-2 text-gray-500 justify-end">
                    <div :class="{ 'text-gray-300': item.discount, 'line-through': item.discount }"
                      class="text-gray-400 font-sans">${{ item.price }}</div>
                    <div class="text-green-400">{{ item.discount }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div v-else>
      <div class="flex justify-center items-center w-full min-h-40 mt-10">
        Tidak ada item
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'
import courseImage from '@/assets/course.png';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
})
const showAll = ref(false)
const gridClass = computed(() => {
  return {
    'grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5': true,
    'sm:grid-rows-3 md:grid-rows-6 lg:grid-rows-10': !showAll.value
  }
})
const emit = defineEmits(['selected'])

function openCourse(item) {
  emit('selected', item)
}

// function toggleShowAll() {
//   showAll.value = !showAll.value
// }

</script>
