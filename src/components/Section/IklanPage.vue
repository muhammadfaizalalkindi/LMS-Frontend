<template>
    <div class="bg-gradient-to-r from-green-400 to-yellow-400">
        <div class="flex flex-1 justify-center text-center items-center">
            <div class="text-center justify-between items-start mx-8">
                <div class="my-2 font-semibold sm:font-medium text-start">
                    <h1 class="text-md sm:text-lg md:text-2xl lg:text-4xl">Belajar dengan Expert <p>Terbaik</p></h1>
                    
                </div>
                <div class="my-2 font-light text-start text-base">
                    <h2> Yuk, ikuti pembelajaran terbaik. Tingkatkan ilmu dan <p>ketrampilan kamu dengan
                            bimbingan Expert terbak disini</p>
                    </h2>
                </div>
                <div class=" text-start my-4">
                    <router-link :to="{ name: 'LoginPage' }"
                        class="btn-primary text-white rounded-full px-4 py-2 text-base font-sm "
                        aria-current="page" :class="{ 'bg-primary': activePage === 'LoginPage' }">Sign-in</router-link>
                </div>
            </div>
            <div class="h-full overflow-hidden">
                <div >
                    <img class="sm:w-80 w-100 h-100" src="@/assets/Iklan.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'SectionIklan',
    
}
</script>