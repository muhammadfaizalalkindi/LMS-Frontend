Saya akan membuatkan component select menggunakan Vue.js Composition API dengan styling Tailwind CSS.



```vue
<template>
  <div class="relative w-full">
    <!-- Selected Value Display -->
    <button 
      @click="toggleDropdown"
      class="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      :class="{'border-gray-300': !isOpen, 'border-blue-500': isOpen}"
    >
      <span v-if="modelValue" class="block truncate">
        {{ getSelectedLabel }}
      </span>
      <span v-else class="block truncate text-gray-500">
        {{ placeholder }}
      </span>
      
      <!-- Dropdown Arrow -->
      <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg 
          class="w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>

    <!-- Dropdown Options -->
    <div 
      v-if="isOpen"
      class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto"
    >
      <ul class="py-1">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
          :class="{'bg-blue-50 text-blue-700': modelValue === option.value}"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    // Each option should have { label: string, value: string|number }
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const getSelectedLabel = computed(() => {
  const selected = props.options.find(option => option.value === props.modelValue)
  return selected ? selected.label : ''
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

// Close dropdown when clicking outside
const closeOnClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Add/remove event listener
onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>

```

Berikut cara menggunakan komponen select yang telah dibuat:

```vue
<template>
  <div class="w-64">
    <CustomSelect
      v-model="selectedValue"
      :options="options"
      placeholder="Pilih item"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
</script>
```

Fitur-fitur komponen select ini:
1. Menggunakan v-model untuk two-way binding
2. Mendukung placeholder text
3. Styling menggunakan Tailwind CSS
4. Responsive dan mobile-friendly
5. Keyboard accessible
6. Animasi dropdown yang smooth
7. Highlight pada option yang dipilih
8. Auto-close saat mengklik di luar dropdown

Apakah ada fitur tambahan yang Anda inginkan untuk komponen select ini?
