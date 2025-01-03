<template>
  <Modal v-model="isOpen" @confirm="handleConfirm">
    <template #header>Create Project</template>

    <form @submit.prevent="submit" class="my-4">
      <VideoUpload class="mb-4" btn-label="Unggah Video" @file-selected="onFileSelected" />

      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="name">Name</label>
        <input v-model="form.name"
          class="w-full rounded border border-stroke bg-gray py-3 px-2 font-normal text-black focus:border-primary focus-visible:outline-none "
          type="text" placeholder="Project name" />
      </div>

      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="description">Description</label>
        <textarea v-model="form.description"
          class="w-full rounded border border-stroke bg-gray font-normal text-black focus:border-primary focus-visible:outline-none" rows="3" placeholder=""></textarea>
      </div>

      <div class="w-full mb-4">
        <label class="mb-3 block text-sm font-medium text-black" for="description">Members</label>
        <MultiSelect v-model="form.members" :options="members" multiple></MultiSelect>
      </div>

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
import VideoUpload from '@/components/Form/VideoUpload.vue'
import { reactive, watch, defineEmits, defineModel } from 'vue';
import Modal from '@/components/Component/Modal.vue'
import { useProjectStore } from '@/Stores/project';
import MultiSelect from '@/components/Form/MultiSelect.vue';
import { ref } from 'firebase/storage';

const emit = defineEmits(['change', 'submitted'])
const store = useProjectStore()

const form = reactive({
  name: null,
  description: null,
  fileUrl: null,
  members: []
})
const isOpen = defineModel('open')
const onFileSelected = ({url}) => {
  form.fileUrl = url
}
const members = ref([
  {label: 'John', value: 1},
  {label: 'Jane', value: 2},
  {label: 'Mahmud', value: 3},
  {label: 'Ridho', value: 4},
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
  form.name = null
  form.description = null;
  form.fileUrl = null
  form.members = []
}
</script>
