<template>
  <div class="container mx-auto p-6">
    <div class="flex py-2" v-if="user.role !== 'USER'">
      <button @click="isOpen = true"
        class="inline-flex px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
        Tambah
      </button>
    </div>
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <!-- Table Header -->
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
            <th class="relative px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="project in projects" :key="project.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <!-- Image or File Icon -->
              <div v-if="isImage(project.fileType)">
                <img :src="project.fileUrl" :alt="project.name" class="h-10 w-10 rounded-full object-cover" />
              </div>
              <div v-else class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900">{{ project.name }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500 line-clamp-2">{{ project.description }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <AvatarStack :avatars="makeAvatar(project)" :limit="3"></AvatarStack>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">{{ formatDate(project.createdAt) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <!-- Three Dot Menu -->
              <div class="relative" v-click-outside="closeMenu">
                <button @click="toggleMenu(project.id)" class="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <!-- Dropdown Menu -->
                <div v-if="activeMenu === project.id"
                  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share</a>
                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <ProjectCreate v-model:open="isOpen" @change="formChanged"></ProjectCreate>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'date-fns'
import { useProjectStore } from '@/Stores/project'
import ProjectCreate from './Partials/ProjectCreate.vue'
import { useAuthStore } from '@/Stores/auth'

const isOpen = ref(false)

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}

const store = useProjectStore()
const storage = useAuthStore()
const user = storage.getCurrentUser()
// Sample projects data
const projects = store.items
const activeMenu = ref(null)

const isImage = (fileType) => {
  return ['image', 'jpg', 'jpeg', 'png', 'gif'].includes(fileType.toLowerCase())
}

const formatDate = (date) => {
  return format(new Date(date), 'dd MMM yyyy')
}

const toggleMenu = (projectId) => {
  activeMenu.value = activeMenu.value === projectId ? null : projectId
}

const closeMenu = () => {
  activeMenu.value = null
}

const makeAvatar = (item) => {
  let items = []
  if(item.members && item.members.length) {
    item.members.forEach((m) => {
      items.push({
        name: m.name ?? '[name]',
        image: `https://picsum.photos/40?random=2`
      })
    })
    return items
  }
  return items
}

</script>
