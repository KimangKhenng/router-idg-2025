import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import Setting from '@/pages/Setting.vue'
import Collections from '@/components/Collections.vue'
import PricingList from '@/components/PricingList.vue'
import Project from '@/pages/Project.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import Registration from './pages/Registration.vue'
import User from '@/pages/User.vue'
import Upload from '@/pages/Upload.vue'
import FileView from '@/pages/FileView.vue'
import ContactUs from '@/pages/ContactUs.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/register', name: 'Register', component: Registration },
    { path: '/users', name: 'Users', component: User },
    {
        path: '/setting', component: Setting, children: [
            { path: '', component: Collections },
            { path: 'pricing', component: PricingList }
        ]
    },
    { path: '/project', component: Project },
    { path: '/services', component: Upload },
    { path: '/files', component: FileView },
    { path: '/contact-us', component: ContactUs },
    { path: '/project/:name', name: 'ProjectDetail', component: ProjectPage, props: true },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]


const router = createRouter({
    linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-bold',
    history: createWebHistory(),
    routes
})

router.afterEach(async (to, from, failure) => {
    if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});

export default router;