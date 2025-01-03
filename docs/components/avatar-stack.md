# Avatar

```vue
<template>
  <div class="relative flex items-center">
    <template v-for="(avatar, index) in limitedAvatars" :key="index">
      <div
        class="relative inline-block"
        :style="{ marginLeft: index === 0 ? '0px' : '-0.75rem' }"
      >
        <img
          :src="avatar.image"
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
import { computed } from 'vue'

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

```

Saya telah membuat komponen Avatar Stack dengan fitur berikut:

1. Menggunakan Vue.js Composition API dengan `<script setup>`
2. Styling menggunakan Tailwind CSS
3. Properti yang dapat dikustomisasi:
   - `avatars`: Array berisi data avatar (image dan name)
   - `limit`: Jumlah maksimal avatar yang ditampilkan (default: 3)
4. Fitur:
   - Avatar ditumpuk dengan efek overlap
   - Menampilkan sisa jumlah avatar yang tidak ditampilkan
   - Tooltip nama saat hover pada avatar
   - Border putih di sekeliling avatar
   - Responsive

Cara penggunaan komponen:

```vue
<template>
  <AvatarStack 
    :avatars="[
      { name: 'User 1', image: '/path/to/image1.jpg' },
      { name: 'User 2', image: '/path/to/image2.jpg' },
      { name: 'User 3', image: '/path/to/image3.jpg' },
      { name: 'User 4', image: '/path/to/image4.jpg' },
    ]"
    :limit="3"
  />
</template>
```
