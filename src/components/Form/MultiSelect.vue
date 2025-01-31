<template>
  <div class="w-full">
    <!-- Select Container -->
    <div
      class="relative w-full"
      @click="toggleDropdown"
      @blur="closeDropdown"
      tabindex="0"
    >
      <!-- Input Display Area -->
      <div
        class="min-h-[42px] w-full border border-gray-300 rounded-lg px-3 py-2 flex flex-wrap gap-2 cursor-pointer"
        :class="{'ring-2 ring-blue-500': isOpen}"
      >
        <!-- Selected Items Pills -->
        <template v-if="selectedValues.length">
          <span
            v-for="item in selectedValues"
            :key="item.value"
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {{ item.label }}
            <button
              @click.stop="removeItem(item)"
              class="hover:text-blue-600"
            >
              ×
            </button>
          </span>
        </template>

        <!-- Placeholder -->
        <span v-else class="text-gray-400">
          {{ placeholder }}
        </span>
      </div>

      <!-- Dropdown -->
      <div
        v-if="isOpen"
        class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
      >
        <div
          v-for="option in options"
          :key="option.value"
          @click.stop="selectItem(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          :class="{'bg-blue-50': isSelected(option)}"
        >
          <input
            type="checkbox"
            :checked="isSelected(option)"
            class="h-4 w-4 text-blue-600 rounded"
            @click.stop
          >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Array, String, Number],
    required: true
  },
  options: {
    type: Array,
    required: true,
    // Each option should have { label: string, value: string|number }
  },
  multiple: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Select options...'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

// Compute selected values based on modelValue
const selectedValues = computed(() => {
  if (props.multiple) {
    return props.options.filter(option =>
      props.modelValue.includes(option.value)
    )
  }
  return props.options.filter(option =>
    option.value === props.modelValue
  )
})

// Check if an option is selected
const isSelected = (option) => {
  if (props.multiple) {
    return props.modelValue.includes(option.value)
  }
  return props.modelValue === option.value
}

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown
const closeDropdown = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}

// Handle item selection
const selectItem = (option) => {
  if (props.multiple) {
    const newValue = isSelected(option)
      ? props.modelValue.filter(value => value !== option.value)
      : [...props.modelValue, option.value]
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', option.value)
    isOpen.value = false
  }
}

// Remove selected item
const removeItem = (option) => {
  if (props.multiple) {
    emit('update:modelValue',
      props.modelValue.filter(value => value !== option.value)
    )
  } else {
    emit('update:modelValue', '')
  }
}
</script>
