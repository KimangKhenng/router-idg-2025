<template>
    <Insight />
    <HeroBanner />
    <BannerLeft />
</template>
<script>
import HeroBanner from '@/components/HeroBanner.vue'
import BannerLeft from '@/components/BannerLeft.vue'
import Insight from '@/components/Insight.vue';
export default {
    components: {
        HeroBanner,
        BannerLeft,
        Insight
    }
}
</script>