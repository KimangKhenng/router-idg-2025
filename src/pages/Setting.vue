<template>
    <section>
        <Avatar title="Setting Title" description="Setting Description">
            <template #onimage>
                <p>Hello on Image</p>
            </template>
            <template #oncontent>
                <p>Hello on Content</p>
            </template>
        </Avatar>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
                <h2 class="font-moul text-xl font-bold text-gray-900 sm:text-3xl">{{ $t('productTitle') }}</h2>

                <p class="mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                    dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
            </header>
            <div class="flex mt-4 mb-4 gap-2">
                <router-link
                    class="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
                    to="/setting">
                    Collections
                </router-link>

                <router-link
                    class="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
                    to="/setting/pricing">
                    User Stories
                </router-link>
            </div>
            <router-view />
        </div>
    </section>
</template>
<script>
import Avatar from '@/components/Avatar.vue';
import Collections from '@/components/Collections.vue';
export default {
    components: {
        Collections,
        Avatar
    },
}
</script>