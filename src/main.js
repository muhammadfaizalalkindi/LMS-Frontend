import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/global.css';
import router from './router/index';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './Stores/stores';
import { createPinia } from 'pinia';

// global components
import Modal from '@/components/Component/Modal.vue'
import MultiSelect from './components/Form/MultiSelect.vue'
import AvatarStack from './components/Component/AvatarStack.vue'

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.use(store);
app.component('Modal', Modal)
app.component('MultiSelect', MultiSelect)
app.component('AvatarStack', AvatarStack)
app.mount('#app');
