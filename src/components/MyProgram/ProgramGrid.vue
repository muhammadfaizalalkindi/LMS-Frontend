<template>
  <div class="flex flex-col space-y-4 justify-end m-8">
    <div v-if="displayedCourse.length">
      <div :class="gridClass" class="grid gap-4 justify-center items-center">
        <div v-for="(item, i) in displayedCourse" :key="i" class="flex-shrink-0">
          <div class="h-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-lg shadow-md items-center justify-center cursor-pointer">
            <!-- Mengatur ukuran gambar -->
            <div>
              <img class="object-cover small-image rounded-t-lg" :src="courseImage" alt="Course Image" />
            </div>
            <!-- konten -->
            <div class="flex flex-col py-2 space-y-6">
              <div class="flex flex-col space-y-2 min-h-14">
                <p class="px-4 font-semibold text-xs sm:text-sm md:text-md text-gray-700">{{ item.name }}</p>
              </div>
              <div class="w-full h-auto px-4 ">
                <ProgressBar class="h-auto" :progress="item.progress" />
              </div>
              <div class="border-t-2 border-gray-300 px-4 pt-2 items-center text-center">
                <button @click="openCourse(item)"
                  class="rounded-md w-full btn-primary tonal py-2 px-4 shadow-md transition-colors duration-200 font-semibold text-sm">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
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
import ProgressBar from '@/components/Progres/ProgressBio';
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
const displayedCourse = computed(() => {
  if (showAll.value) {
    return props.items;
  } else {
    const Count = 1;
    const smCount = 2;
    const mdCount = 4;
    const lgCount = 5;
    if (window.innerWidth >= 1024) {
      return props.items.slice(0, lgCount);
    } else if (window.innerWidth >= 768) {
      return props.items.slice(0, mdCount);
    } else if (window.innerWidth >= 360) {
      return props.items.slice(0, smCount);
    } else {
      return props.items.slice(0, Count);
    }
  }
})
const emit = defineEmits(['selected'])

function openCourse(item) {
  emit('selected', item)
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
