<template>
    <div class="flex flex-row-reverse items-stretch gap-4">
        <slot name="onimage"></slot>
        <img alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-20 rounded object-cover" />
        <div>
            <h3 class="font-medium text-gray-900 sm:text-lg">{{ title }}</h3>

            <p class="mt-0.5 text-gray-700">
                {{ description }}
            </p>
        </div>
        <slot name="oncontent"></slot>
    </div>
</template>
<script>
export default {
    props: ['title', 'description'],
}
</script>