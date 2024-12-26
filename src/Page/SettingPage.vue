<script setup lang="js">
import { ref, watch, onMounted } from 'vue'

// Define ref variables for form data and photo
const formData = ref({
    fullName: 'Devid Jhon',
    phoneNumber: '+990 3343 7865',
    emailAddress: 'devidjond45@gmail.com',
    username: 'devidjhon24',
    bio: 'Ilmu adalah guru'
})

const defaultPhoto = require('@/assets/profil.png')
const userPhoto = ref(defaultPhoto)
const uploadedPhoto = ref(null)

// Load data from localStorage when component is mounted
onMounted(() => {
    const savedFormData = localStorage.getItem('formData')
    if (savedFormData) {
        formData.value = JSON.parse(savedFormData)
    }

    const savedUserPhoto = localStorage.getItem('userPhoto')
    if (savedUserPhoto) {
        userPhoto.value = savedUserPhoto
    }
})

// Watch for changes and save to localStorage
watch(formData, () => {
    localStorage.setItem('formData', JSON.stringify(formData.value))
}, { deep: true })

watch(userPhoto, () => {
    localStorage.setItem('userPhoto', userPhoto.value)
})

// Handle form submission for personal information
const handleSubmit = () => {
    alert('Personal information changed successfully.')
}

// Handle cancel action for personal information
const handleCancel = () => {
    // Reset form data or perform other cancel actions
}

// Handle form submission for user photo
const handlePhotoSubmit = () => {
    if (uploadedPhoto.value) {
        userPhoto.value = uploadedPhoto.value
        uploadedPhoto.value = null // Clear the uploaded photo
        alert('Profile photo changed successfully.')
    }
}

// Handle cancel action for user photo
const handlePhotoCancel = () => {
    uploadedPhoto.value = null
}

// Handle file change for user photo
const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            uploadedPhoto.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

// Handle delete action for user photo
const deletePhoto = () => {
    userPhoto.value = defaultPhoto
    uploadedPhoto.value = null
}

// Handle password change submission
const passwordData = ref({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
})

const handleChangePasswordSubmit = () => {
    if (passwordData.value.newPassword !== passwordData.value.confirmNewPassword) {
        alert('New passwords do not match.')
        return
    }

    alert('Password changed successfully.')
    passwordData.value.currentPassword = ''
    passwordData.value.newPassword = ''
    passwordData.value.confirmNewPassword = ''
}

// Handle cancel action for password change
const handlePasswordCancel = () => {
    passwordData.value.currentPassword = ''
    passwordData.value.newPassword = ''
    passwordData.value.confirmNewPassword = ''
}

</script>

<template>

    <div class="sm:grid sm:grid-cols-6 gap-4 m-8 flex flex-col ">
        <!-- Personal Information Section -->
        <div class="col-span-4 order-3 sm:order-1 ">
            <div class="rounded-sm border border-stroke bg-white shadow-default ">
                <div class="border-b border-stroke py-4 px-4 ">
                    <h3 class="font-medium text-black ">Personal Information</h3>
                </div>
                <div class="m-8">
                    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
                        <!-- Full Name Section -->
                        <div class="mb-5.5 flex flex-col gap-5 sm:flex-row">
                            <div class="w-full sm:w-1/2">
                                <label class="mb-3 block text-sm font-medium text-black " for="fullName">Full
                                    Name</label>
                                <div class="search flex space-x-2 items-center border border-gray-300 rounded-md px-2 ">
                                    <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                                fill="" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                                fill="" />
                                        </g>
                                    </svg>
                                    <input v-model="formData.fullName"
                                        class="w-full bg-gray py-3 font-normal text-black focus:border-primary focus-visible:outline-none"
                                        type="text" name="fullName" id="fullName" placeholder="Devid Jhon" />
                                </div>
                            </div>

                            <!-- Phone Number Section -->
                            <div class="w-full sm:w-1/2">
                                <label class="mb-3 block text-sm font-medium text-black" for="phoneNumber">Phone
                                    Number</label>
                                <input v-model="formData.phoneNumber"
                                    class="w-full rounded border border-stroke bg-gray py-3 px-2 font-normal text-black focus:border-primary focus-visible:outline-none "
                                    type="text" name="phoneNumber" id="phoneNumber" placeholder="+990 3343 7865" />
                            </div>
                        </div>

                        <!-- Email Address Section -->
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black" for="emailAddress">Email
                                Address</label>
                            <div class=" search flex space-x-2 items-center border border-gray-300 rounded-md px-2">
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                                            fill="" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                            fill="" />
                                    </g>
                                </svg>

                                <input v-model="formData.emailAddress"
                                    class="w-full rounded bg-gray py-3 font-normal text-black focus:border-primary focus-visible:outline-none"
                                    type="email" name="emailAddress" id="emailAddress"
                                    placeholder="devidjond45@gmail.com" />
                            </div>
                        </div>

                        <!-- Username Section -->
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black " for="Username">Username</label>
                            <input v-model="formData.username"
                                class="w-full rounded border border-stroke bg-gray py-3 px-2 font-normal text-black focus:border-primary focus-visible:outline-none"
                                type="text" name="Username" id="Username" placeholder="devidjhon24" />
                        </div>

                        <!-- Bio Section -->
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black" for="bio">BIO</label>
                            <div class="search flex space-x-2 border border-gray-300 rounded-md px-2 py-3">
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8" clip-path="url(#clip0_88_10224)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                                            fill="" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                                            fill="" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_88_10224">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <textarea v-model="formData.bio"
                                    class="w-full rounded bg-gray font-normal text-black focus:border-primary focus-visible:outline-none"
                                    name="bio" id="bio" rows="6" placeholder="Write your bio here"></textarea>
                            </div>
                        </div>

                        <!-- Save and Cancel Buttons -->
                        <div class="flex justify-end gap-4">
                            <button
                                class="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1"
                                type="button" @click="handleCancel">
                                Cancel
                            </button>
                            <button
                                class="flex justify-center rounded btn-primary py-2 px-6 font-medium"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Your Photo Section -->
        <div class="col-span-2 order-1 sm:order-2">
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="flex justify-between items-center border-b px-4 border-stroke">
                    <div class="py-4">
                        <h3 class="font-medium text-black">Your Photo</h3>
                    </div>
                    <div>
                        <span>
                            <button class="text-sm font-medium p-2 rounded-lg hover:bg-gray-100" @click="deletePhoto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="p-7">
                    <form @submit.prevent="handlePhotoSubmit" class="flex flex-col gap-4">
                        <!-- User Photo Section with File Upload Button -->
                        <div class="flex items-center justify-center relative">
                            <div class="relative w-42 h-42">
                                <img class="w-full h-full object-cover" :src="uploadedPhoto || userPhoto" alt="User" />
                                <label
                                    class="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-2 cursor-pointer text-md md:text-lg">
                                    <input type="file" accept="image/*" class="hidden" @change="handleFileChange" />
                                    <i class="fa-solid fa-arrow-up-from-bracket text-white"></i>
                                    Upload
                                </label>
                            </div>
                        </div>

                        <!-- Save and Cancel Buttons for Photo Section -->
                        <div class="flex justify-end gap-4">
                            <button
                                class="flex justify-center rounded border border-stroke py-1 md:py-2 px-4 md:px-6 text-center items-center font-medium text-black hover:bg-gray-100 text-sm sm:text-xs md:text-md lg:text-lg"
                                type="button" @click="handlePhotoCancel">
                                Cancel
                            </button>
                            <button
                                class="flex justify-center rounded btn-primary md:py-2 px-4 md:px-6 text-center items-center font-medium text-sm sm:text-xs md:text-md lg:text-lg"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- change Password -->
        <div class="col-span-3 xl:col-span-3 order-3">
            <div class="rounded-sm border border-stroke bg-white shadow-default ">
                <div class="border-b border-stroke py-4 px-7">
                    <h3 class="font-medium text-black">
                        Change Password
                    </h3>
                </div>
                <div class="m-8">
                    <form @submit.prevent="handleChangePasswordSubmit" class="flex flex-col space-y-4">
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black">
                                Current Password
                            </label>
                            <input type="password" placeholder="Current Password"
                                class="w-full rounded border-[1.5px] border-stroke bg-gray py-3 px-5 font-normal text-black outline-none transition focus:border-primary active:border-primary"
                                v-model="passwordData.currentPassword" required />
                        </div>
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black">
                                New Password
                            </label>
                            <input type="password" placeholder="New Password"
                                class="w-full rounded border-[1.5px] border-stroke bg-gray py-3 px-5 font-normal text-black outline-none transition focus:border-primary active:border-primary"
                                v-model="passwordData.newPassword" required />
                        </div>
                        <div class="mb-5.5">
                            <label class="mb-3 block text-sm font-medium text-black">
                                Confirm New Password
                            </label>
                            <input type="password" placeholder="Confirm New Password"
                                class="w-full rounded border-[1.5px] border-stroke bg-gray py-3 px-5 font-normal text-black outline-none transition focus:border-primary active:border-primary"
                                v-model="passwordData.confirmNewPassword" required />
                        </div>
                        <div class="flex justify-end gap-4">
                            <button type="button"
                                class="flex justify-center rounded-md border border-stroke py-2 px-6 font-normal text-black hover:shadow-1"
                                @click="handlePasswordCancel">
                                Cancel
                            </button>
                            <button type="submit"
                                class="flex justify-center rounded btn-primary py-2 px-6 font-normal text-gray">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
