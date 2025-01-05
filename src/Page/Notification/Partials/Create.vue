<template>
  <Modal v-model="isOpen" @confirm="handleConfirm">
    <template #header>Create Notification</template>

    <form @submit.prevent="submit" class="my-4">
      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="name">Type</label>
        <SingleSelect v-model="form.type" :options="types" :multiple="false"></SingleSelect>

      </div>
      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="name">Title</label>
        <input v-model="form.title"
          class="w-full rounded border border-stroke bg-gray py-3 px-2 font-normal text-black focus:border-primary focus-visible:outline-none "
          type="text" placeholder="Project name" />
      </div>

      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="message">Message</label>
        <textarea v-model="form.message"
          class="w-full rounded border border-stroke bg-gray font-normal text-black focus:border-primary focus-visible:outline-none" rows="3" placeholder=""></textarea>
      </div>

      <!-- <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="description">Recipients</label>
        <MultiSelect v-model="form.members" :options="members" multiple></MultiSelect>
      </div> -->

    </form>

    <template #footer>
      <button @click="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Save
      </button>
      <!-- Optional: Custom footer buttons -->
    </template>
  </Modal>
</template>

<script setup>
import { ref, reactive, watch, defineEmits, defineModel } from 'vue';
import Modal from '@/components/Component/Modal.vue'
import { useNotificationStore } from '@/Stores/notification';

const emit = defineEmits(['change', 'submitted'])
const store = useNotificationStore()

const form = reactive({
  title: null,
  message: null,
  type: 1,
  members: []
})
const isOpen = defineModel('open')

const types = ref([
  {label: 'assignment', value: 1},
  {label: 'discussion', value: 2},
  {label: 'reminder', value: 3},
  {label: 'announcement', value: 4},
])

watch(form, (value) => {
  emit('change', value)
})

function submit() {
  //

  setTimeout(() => {
    store.add(form)
    formReset()
    isOpen.value = false
    emit('submitted')
  }, 1500);
}

function formReset() {
  form.title = null
  form.message = null;
  form.type = 1
  form.members = []
}
</script>
