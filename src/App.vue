<template>
  <LoginModal />
  <RegisterModal />
  <HyperHeader v-if="$route.name != 'NotFound'" />
  <router-view />
  <HyperFooter v-if="$route.name != 'NotFound'" />
</template>
<script>
import HyperHeader from '@/components/HyperHeader.vue';
import HyperFooter from '@/components/HyperFooter.vue';
import LoginModal from '@/components/LoginModal.vue';
import RegisterModal from '@/components/RegisterModal.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
    LoginModal,
    RegisterModal
  }
}
</script>