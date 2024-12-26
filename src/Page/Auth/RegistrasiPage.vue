<template>
    <div class="flex h-full flex-col items-center justify-center lg:p-0">
        <div class="bg-white p-8 rounded-lg justify-center items-center">
            <div class="flex items-center justify-center text-center pb-4">
                <img class="h-12 w-auto" src="@/assets/logo.png" alt="Logo">
                <div class="font-bold text-2xl px-4 py-2">EduNes</div>
            </div>

            <!-- NAVBAR STUDENT/INSTRUCTOR -->
            <div class="flex text-center justify-center items-center">
                <div @click="userType = 'student'"
                    :class="{ 'bg-primary': userType === 'student', 'hover:bg-primary': userType !== 'student' }"
                    class="py-2.5 px-12 shadow-sm shadow-gray-300 cursor-pointer">Students</div>
                <div @click="userType = 'instructor'"
                    :class="{ 'bg-primary': userType === 'instructor', 'hover:bg-primary': userType !== 'instructor' }"
                    class="py-2.5 px-12 shadow-sm shadow-gray-300 cursor-pointer">Instructor</div>
            </div>

            <!-- logo -->
            <div class="sm:mx-auto sm:w-full sm:max-w-sm pt-12 pb-4">
                <div class=" text-center text-2xl font-bold tracking-tight text-gray-900">Create an account</div>
            </div>

            <div class="sm:mx-auto w-full sm:max-w-sm">
                <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-500">Full Name</label>
                        <div class="flex space-x-2 w-full">
                            <input v-model="fullName.firstName"
                                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="First Name" required>
                            <input v-model="fullName.lastName"
                                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Last Name">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-500">Username</label>
                        <input v-model="username"
                            class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Username" required>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-500">Phone</label>
                        <input v-model="phone_number" name="phone_number" id="phone_number"
                            class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="+6281227328721" required>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
                        <input type="email" v-model="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@company.com" required>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex space-x-2">
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
                                <input type="password" v-model="password" name="password" id="password"
                                    placeholder="Password" autocomplete="current-password" required
                                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                            </div>
                            <div>
                                <label for="confirm-password" class="block text-sm font-medium text-gray-500">Confirm
                                    Password</label>
                                <input type="password" v-model="confirmpassword" name="confirm-password"
                                    id="confirm-password" placeholder="Confirm Password"
                                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required>
                            </div>
                        </div>
                        <div v-if="confirmpassword !== '' && !passwordsMatch"
                            class="flex flex-col text-sm text-red-500">Password and confirm password must match</div>
                    </div>

                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-blue-50 focus:ring-3 focus:ring-blue-300"
                                required>
                        </div>
                        <div class="text-sm">
                            <label for="terms" class="text-gray-500 font-light">I agree with all of your
                                <a class="text-blue-400 hover:underline mx-2" href="#">Terms & Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="flex justify-center items-center text-center lg:py-6 py-4">
                        <button @click="sendOTP"  :disabled="formSubmitted && !allFieldsFilled && otpSent"
                            class="text-white btn-primary min-w-40 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                            type="submit">{{ otpSent ? 'OTP Sent' : 'Create Account' }}
                        </button>
                    </div>

                    <div class="justify-center text-center">
                        <div class="flex items-center justify-center">
                            <div class="border-b border-gray-300 flex-grow mr-4"></div>
                            <p class="text-sm text-gray-500">Sign up with</p>
                            <div class="border-b border-gray-300 flex-grow ml-4"></div>
                        </div>

                        <button type="button"
                            class="text-black bg-white shadow hover:bg-gray-100 hover:text-black font-medium rounded-full text-sm py-2 px-4 my-4 inline-flex gap-2 items-center">
                            <img class="h-6" src="@/assets/Google.png" alt="google">
                            Google
                        </button>

                        <div class="mt-auto text-center text-sm text-gray-500">
                            Already have an account?
                            <router-link :to="{ name: 'LoginPage' }"
                                class="font-semibold leading-6 text-[#564FFD] hover:text-indigo-500 hover:underline text-sm"
                                :class="{ 'bg-blue-500': activePage === 'LoginPage' }">Login</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            fullName: { firstName: '', lastName: '' },
            email: '',
            username: '',
            phone_number: '',
            userType: 'student', // Default to student
            password: '',
            confirmpassword: '',
            formSubmitted: false,
            otpSent: false, // Flag to track if OTP has been sent
            otp: '', // Variable to store OTP entered by user
            otpVerified: false, // Flag to track if OTP has been verified
            activePage: '',
        };
    },
    computed: {
        passwordsMatch() {
            return this.password === this.confirmpassword;
        },
        allFieldsFilled() {
            const inputs = document.querySelectorAll('input[required]');
            for (let i = 0; i < inputs.length; i++) {
                if (!inputs[i].value.trim()) {
                    return false;
                }
            }
            return true;
        }
    },
    methods: {
        async submitForm() {
            this.formSubmitted = true;
            if (!this.allFieldsFilled) {
                alert('Please fill in all required fields.');
                return;
            }

            // Determine the registration endpoint based on userType
            let registerEndpoint = '';
            if (this.userType === 'student') {
                registerEndpoint = 'http://127.0.0.1:3000/auth/student/register';
            } else if (this.userType === 'instructor') {
                registerEndpoint = 'http://127.0.0.1:3000/auth/instructor/register';
            } else {
                alert('Invalid userType');
                return;
            }

            const { email, fullName, username, password, phone_number } = this;
            const name = `${fullName.firstName} ${fullName.lastName}`;

            axios.post(registerEndpoint, {
                email,
                name,
                username,
                password,
                phone_number,
                image: null // Optionally add image if required
            })
            .then(response => {
                console.log('Registration successful:', response.data);
                // Simpan userType ke localStorage
        localStorage.setItem('userType', this.userType);
                // Handle successful registration (e.g., redirect to verification page)
                this.$router.push('/verifikasi');
            })
            .catch(error => {
                console.error('Error registering user:', error.response ? error.response.data : error.message);
                alert('Failed to register user. Please try again later.');
            });
        }
    },
    async sendOTP() {
      // Lakukan validasi data jika diperlukan
      // Misalnya, pastikan email diisi dengan benar
      if (!this.email) {
        alert('Please enter your email');
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:3000/auth/otp', {
          email: this.email,
        });

        console.log('OTP sent:', response.data);
        this.otpSent = true; // Set flag OTP sudah terkirim
        alert('OTP sent successfully! Check your email.');
      } catch (error) {
        console.error('Failed to send OTP:', error.response ? error.response.data : error.message);
        alert('Failed to send OTP. Please try again later.');
      }
    },
    created() {
        // You can put code here that you want to execute when the component is created
    }
};
</script>

<style>
/* Your optional CSS styles */
</style>
