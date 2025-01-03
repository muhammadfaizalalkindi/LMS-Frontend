<template>
  <div class="w-full max-w-2xl mx-auto">
    <!-- Drag & Drop Zone -->
    <div
      class="relative cursor-pointer p-6 border-2 border-dashed border-gray-300 rounded-lg text-center transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50"
      :class="{ 'border-blue-500 bg-blue-50': isDragging }"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      @click="openFile"
    >
      <div class="flex flex-col items-center gap-4">
        <!-- Upload Icon -->
        <div class="text-gray-400">
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        <!-- Upload Text -->
        <div class="flex flex-col items-center gap-2">
          <!-- <p class="text-gray-600">Drag & drop file disini atau</p> -->

          <!-- File Input Button -->
          <label class="inline-flex px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
            {{ btnLabel }}
            <input
              type="file"
              ref="file"
              @change="handleFileSelect"
              :accept="acceptedTypes"
              :multiple="allowMultiple"
              class="hidden"
            >
          </label>
        </div>
      </div>

      <!-- File Preview List -->
      <div v-if="selectedFiles.length" class="mt-6">
        <div class="space-y-2">
          <div
            v-for="(file, index) in selectedFiles"
            :key="index"
            class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors duration-200"
          >
            <div class="flex items-center gap-3">
              <!-- File Icon -->
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <!-- File Name -->
              <span class="text-sm text-gray-600 truncate">{{ file.name }}</span>
            </div>

            <!-- Remove Button -->
            <button
              @click="removeFile(index)"
              class="p-1 text-gray-400 rounded-full hover:bg-gray-200 hover:text-red-500 transition-colors duration-200"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  acceptedTypes: {
    type: String,
    default: '*'
  },
  allowMultiple: {
    type: Boolean,
    default: false
  },
  btnLabel : {
    type: String,
    default: 'Pilih File',
  },
  maxFileSize: {
    type: Number,
    default: 5242880 // 5MB in bytes
  }
})

const emit = defineEmits(['files-selected'])

const file = ref(null)
const isDragging = ref(false)
const selectedFiles = ref([])

const handleDragOver = () => {
  isDragging.value = true
}

const handleDragLeave = () => {
  isDragging.value = false
}

const handleDrop = (e) => {
  isDragging.value = false
  const files = Array.from(e.dataTransfer.files)
  processFiles(files)
}

const openFile = () => {
  if(file.value) {
    file.value.click()
  }
}

const handleFileSelect = (e) => {
  const files = Array.from(e.target.files)
  processFiles(files)
}

const processFiles = (files) => {
  files.forEach(file => {
    if (file.size > props.maxFileSize) {
      alert(`File ${file.name} terlalu besar. Maksimal ukuran file adalah ${props.maxFileSize / 1024 / 1024}MB`)
      return
    }

    if (!props.allowMultiple) {
      selectedFiles.value = []
    }

    selectedFiles.value.push(file)
  })

  emit('files-selected', selectedFiles.value)
}

const removeFile = (index) => {
  selectedFiles.value.splice(index, 1)
  emit('files-selected', selectedFiles.value)
}
</script>
