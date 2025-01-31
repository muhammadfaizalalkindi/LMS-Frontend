<template>
  <div class="relative flex items-center">
    <template v-for="(avatar, index) in limitedAvatars" :key="index">
      <div
        class="relative inline-block"
        :style="{ marginLeft: index === 0 ? '0px' : '-0.75rem' }"
      >
        <img
          :src="`${avatar.image}?random=${index}`"
          :alt="avatar.name"
          class="w-10 h-10 rounded-full border-2 border-white object-cover"
          :title="avatar.name"
        />
      </div>
    </template>

    <div
      v-if="remainingCount > 0"
      class="relative -ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
    >
      <span class="text-sm text-gray-600 font-medium">+{{ remainingCount }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  avatars: {
    type: Array,
    required: true,
    default: () => []
  },
  limit: {
    type: Number,
    default: 3
  }
})

const limitedAvatars = computed(() => {
  return props.avatars.slice(0, props.limit)
})

const remainingCount = computed(() => {
  const remaining = props.avatars.length - props.limit
  return remaining > 0 ? remaining : 0
})
</script>
