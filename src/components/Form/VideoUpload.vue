<template>
  <div class="w-full max-w-2xl mx-auto p-4">
    <!-- Upload Area -->
    <div
      class="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
      :class="{ 'bg-gray-50': isDragging }"
      @dragenter.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <!-- Hidden File Input -->
      <input
        type="file"
        ref="fileInput"
        accept="video/*"
        class="hidden"
        @change="handleFileChange"
      >

      <!-- Preview Area -->
      <template v-if="videoPreview">
        <div class="mb-4">
          <video
            ref="videoPlayer"
            class="w-full rounded-lg"
            controls
            :src="videoPreview"
          ></video>
        </div>

        <div class="flex justify-center gap-3 mt-4">
          <button
            @click="triggerFileInput"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ganti Video
          </button>
          <button
            @click="removeVideo"
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Hapus
          </button>
        </div>
      </template>

      <!-- Upload Prompt -->
      <template v-else>
        <div class="space-y-4">
          <div class="flex justify-center">
            <svg
              class="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 4v16M17 4v16M3 8h3m-3 4h3m-3 4h3M13 8h3m-3 4h3m-3 4h3"
              />
            </svg>
          </div>
          <div class="text-gray-600">
            <button
              type="button"
              @click="triggerFileInput"
              class="text-blue-600 hover:text-blue-700 font-medium focus:outline-none"
            >
              Pilih video
            </button>
            atau drag & drop video di sini
          </div>
          <div class="text-sm text-gray-500">
            Format yang didukung: MP4, WebM, Ogg
          </div>
        </div>
      </template>

      <!-- Loading State -->
      <div v-if="isLoading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-2 text-red-600 text-sm">
      {{ error }}
    </div>

    <!-- File Details -->
    <div v-if="selectedFile" class="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-medium text-gray-900">Detail File:</h3>
      <div class="mt-2 text-sm text-gray-600">
        <p>Nama: {{ selectedFile.name }}</p>
        <p>Ukuran: {{ formatFileSize(selectedFile.size) }}</p>
        <p>Tipe: {{ selectedFile.type }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, defineEmits } from 'vue'

const fileInput = ref(null)
const videoPlayer = ref(null)
const videoPreview = ref(null)
const selectedFile = ref(null)
const isDragging = ref(false)
const isLoading = ref(false)
const error = ref(null)

// Format file size to human readable format
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Trigger file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// Handle file selection
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    processVideoFile(file)
  }
}

// Handle drag and drop
const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  if (file && file.type.startsWith('video/')) {
    processVideoFile(file)
  } else {
    error.value = 'File harus berupa video'
  }
}

// Process video file
const processVideoFile = (file) => {
  // Clear previous error
  error.value = null

  // Validate file size (example: max 100MB)
  const maxSize = 100 * 1024 * 1024 // 100MB in bytes
  if (file.size > maxSize) {
    error.value = 'Ukuran file terlalu besar (maksimal 100MB)'
    return
  }

  // Validate file type
  if (!file.type.startsWith('video/')) {
    error.value = 'File harus berupa video'
    return
  }

  isLoading.value = true
  selectedFile.value = file

  // Create video preview URL
  if (videoPreview.value) {
    URL.revokeObjectURL(videoPreview.value)
  }
  videoPreview.value = URL.createObjectURL(file)
  isLoading.value = false
  emit('file-selected', {url: videoPreview.value, file: file})
}

// Remove video
const removeVideo = () => {
  if (videoPreview.value) {
    URL.revokeObjectURL(videoPreview.value)
  }
  videoPreview.value = null
  selectedFile.value = null
  fileInput.value.value = ''
  error.value = null
}

// Cleanup on component unmount
onBeforeUnmount(() => {
  if (videoPreview.value) {
    URL.revokeObjectURL(videoPreview.value)
  }
})

// Emits for parent component
const emit = defineEmits(['file-selected', 'file-removed'])
</script>

<style scoped>
.border-dashed {
  border-style: dashed;
}
</style>
