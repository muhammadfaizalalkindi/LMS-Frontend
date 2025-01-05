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
              Title
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Send At
            </th>
            <th class="relative px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500 line-clamp-2">{{ item.message }}</div>
            </td>
            <!-- <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <AvatarStack :avatars="makeAvatar(item)" :limit="3"></AvatarStack>
              </div>
            </td> -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">{{ formatDate(item.createdAt) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <!-- Three Dot Menu -->
              <div class="relative" v-click-outside="closeMenu">
                <button @click="toggleMenu(item.id)" class="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <!-- Dropdown Menu -->
                <div v-if="activeMenu === item.id"
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

  <Create v-model:open="isOpen" @change="formChanged"></Create>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { format } from 'date-fns'
import Create from './Partials/Create.vue'
import { useAuthStore } from '@/Stores/auth'
import { useNotificationStore } from '@/Stores/notification'

const isOpen = ref(false)
const store = useNotificationStore()
const storage = useAuthStore()
const user = storage.getCurrentUser()
const items = ref([])
const activeMenu = ref(null)

onMounted(() => {
  const length = user.value.role == 'USER' ? 5 : 20
  store.generate(length)
  items.value = store.items
})

const formatDate = (date) => {
  return format(new Date(date), 'dd MMM yyyy')
}

const toggleMenu = (id) => {
  activeMenu.value = activeMenu.value === id ? null : id
}

const closeMenu = () => {
  activeMenu.value = null
}


</script>
