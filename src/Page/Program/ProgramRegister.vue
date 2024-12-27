<template>
  <div class="">
    <div class="sm:flex-row flex flex-col gap-12 max-w-screen m-12">
      <!-- Form Section -->
      <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4 w-full ">
        <!-- Full Name Section -->
        <div>
          <label class="mb-3 block text-sm font-medium text-black " for="fullName">Full Name</label>
          <div class="search flex space-x-2 items-center border border-gray-300 rounded-md">
            <input class="w-full rounded bg-gray py-2 px-2 text-smfocus:border-primary focus-visible:outline-none"
              type="text" name="fullName" id="fullName" placeholder="fullname" />
          </div>
        </div>

        <!-- Email Address Section -->
        <div class="mb-5.5">
          <label class="mb-3 block text-sm font-medium text-black" for="emailAddress">Email Address</label>
          <div class="search flex space-x-2 items-center border border-gray-300 rounded-md">
            <input class="w-full rounded bg-gray py-2 px-2 text-sm focus:border-primary focus-visible:outline-none"
              type="email" name="emailAddress" id="emailAddress" placeholder="email" />
          </div>
        </div>
        <!-- Phone Number Section -->
        <div>
          <label class="mb-3 block text-sm font-medium text-black" for="phoneNumber">Phone Number</label>
          <input
            class="w-full rounded border border-stroke bg-gray py-2 px-2 text-sm focus:border-primary focus-visible:outline-none "
            type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
        </div>
        <!-- submit -->
        <div type="submit" class="items-center justify-center text-center pt-4">
          <button class="py-2 px-8  bg-blue-400 rounded-lg">Submit</button>
        </div>
      </form>

      <!-- Content Section -->
      <div class="my-8 rounded-xl flex flex-col justify-start items-start gap-4">
        <div class="w-full text-black text-md font-semibold font-sans leading-normal">Pendaftaran Program Design
          UI/UX Ditutup 16 Agustus 2024 </div>
        <div class="full text-black text-sm font-normal font-['Inter'] leading-normal">Dapatkan akses ke demo
          yang
          berisi konten program & sesi bimbingan berkualitas tinggi setelah Anda mengisi formulir ini.</div>
      </div>
    </div>
    <PopUp v-if="showPopup" @close="showPopup = false" />
  </div>
</template>

<script>
import PopUp from '@/components/Section/Browse/PopUp.vue';

export default {
  components: {
    PopUp,

  },

  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
      this.showPopup = true;
    }
  }
}
</script>
