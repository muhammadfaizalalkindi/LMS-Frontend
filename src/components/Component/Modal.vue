<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="closeModal"
      ></div>
    </Transition>

    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 flex items-center justify-center z-50 px-4 py-6"
      >
        <div
          class="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col"
          @click.stop
        >
          <!-- Header (fixed) -->
          <div class="flex justify-between items-center p-4 border-b shrink-0">
            <h3 class="text-lg font-semibold text-gray-900">
              <slot name="header">Modal Title</slot>
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Scrollable content -->
          <div class="p-4 overflow-y-auto flex-grow">
            <slot>Modal content goes here</slot>
          </div>

          <!-- Footer (fixed) -->
          <div class="flex justify-end gap-2 p-4 border-t shrink-0">
            <slot name="footer">
              <button
                @click="closeModal"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                @click="$emit('confirm')"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Confirm
              </button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
