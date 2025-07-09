<template>
    <div
        class="max-w-6xl mx-auto mt-10 p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg">
        <h2 class="text-3xl font-bold mb-8 text-center text-purple-800">🎓 User Directory</h2>

        <div v-if="loading" class="text-center text-gray-600">Loading users...</div>
        <div v-else-if="error" class="text-center text-red-600">Error: {{ error }}</div>

        <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <UserComponent v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import UserComponent from '@/components/users/UserComponent.vue'

export default {
    name: 'UserList',
    components: {
        UserComponent
    },
    data() {
        return {
            users: [],
            loading: true,
            error: null
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get(
                    'https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users'
                )
                this.users = response.data
            } catch (err) {
                this.error = err.message || 'Failed to load users'
            } finally {
                this.loading = false
            }
        },
    },
    mounted() {
        this.fetchUsers()
    }
}
</script>
