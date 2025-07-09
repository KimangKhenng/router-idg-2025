<template>
    <HeroBanner />
    <Avatar title="Avatar Title" description="Avatar Description" />
    <BannerLeft />
</template>
<script>
import HeroBanner from '@/components/HeroBanner.vue'
import BannerLeft from '@/components/BannerLeft.vue'
import Avatar from '@/components/Avatar.vue'
export default {
    components: {
        HeroBanner,
        BannerLeft,
        Avatar
    }
}
</script>