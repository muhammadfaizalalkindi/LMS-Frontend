<template>
    <div class="flex h-screen bg-gray-800 bg-opacity-40 justify-center items-center">
        <div class=" max-w-xs sm:max-w p-4 rounded-lg bg-gray-200 shadow-lg">
            <div class="flex flex-col justify-center items-center">
                <div class="flex flex-col items-center justify-center">
                    <div class="text-lg sm:text-xl font-semibold mb-4">Verifikasi OTP</div>
                    <div class="text-sm font-light">Enter the verification code we just sent to your email
                        {{ email }}
                    </div>
                </div>
                <div class="text-center items-center justify-center p-4">
                    <div class="gap-2 sm:gap-4 p-4 flex text-2xl text-center items-center justify-center ">
                        <input type="text" id="otp1" name="otp1" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp2')">
                        <input type="text" id="otp2" name="otp2" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp3')">
                        <input type="text" id="otp3" name="otp3" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp4')">
                        <input type="text" id="otp4" name="otp4" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center"
                            @keyup="moveToNext($event, 'otp5')">
                        <input type="text" id="otp5" name="otp5" maxlength="1"
                            class="block w-8 h-8 shadow-sm text-lg border border-gray-300 rounded-md hover:bg-gray-300 text-center">
                    </div>
                    <div class="flex space-x-2 justify-center">
                        <div class="text-sm font-light text-gray-400 ">
                            Didnt receive code?</div>
                        <a href="/registrasi" class="font-semimedium text-sm text-indigo-600 hover:underline ">
                            Resend</a>
                    </div>
                </div>

                <div>
                    <button type="button" @click="submitVerification"
                        class="btn-primary px-4 p-2 rounded-full min-w-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Verifikasi</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerifikasiCard',
    methods: {
        moveToNext(currentInput, nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        },

        submitVerification() {
            // Logika untuk verifikasi
            console.log('Verifikasi berhasil');
            // Ambil jenis pengguna dari data yang disimpan selama pendaftaran atau login
            const userType = localStorage.getItem('userType');

            // Tentukan rute dashboard berdasarkan jenis pengguna
            let dashboardRoute = '';
            if (userType === 'student') {
                dashboardRoute = 'DashboardStudent'; // Ganti dengan nama rute dashboard untuk student
            } else if (userType === 'instructor') {
                dashboardRoute = 'DashboardInstructor'; // Ganti dengan nama rute dashboard untuk instructor
            }

            if (dashboardRoute) {
                this.$router.push({ name: dashboardRoute });
            } else {
                console.error('Dashboard route not found'); // Handle jika rute tidak ditemukan
            }
        }
    }
}

</script>

<style></style>