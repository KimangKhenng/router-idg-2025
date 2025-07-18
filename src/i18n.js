import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
            files: 'Files',
            productTitle: 'Welcome to our project',
            contact: 'Contact Us',
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            files: 'ឯកសារ',
            productTitle: 'សូមស្វាគមន៍មកកាន់គម្រោងរបស់យើង',
            contact: 'ទំនាក់ទំនង',
        }
    }
}
)

export default i18n;