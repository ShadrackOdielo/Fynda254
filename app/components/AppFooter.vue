<template>
<footer class="flex items-center justify-between p-4 bg-inverted text-inverted">
    <UCard variant="solid" :ui="{body:'grid md:grid-cols-4 grid-cols-1 gap-4',footer:''}"  class="w-full ring-0 rounded-none  ">
        <UCard variant="solid" class="ring-0 rounded-none flex ">
            <img src="/logo.png" alt="Bonsus Logo" class="h-8 w-auto mb-2">
            <p class="text-sm text-gray-600 flex flex-wrap dark:text-gray-400">
                Kenya's plug for quality pre-owned finds. We offer a wide selection of electronics, furniture, appliances, and more. We also buy your items at fair prices!
            </p>
        </UCard>
        <UCard variant="solid" :ui="{body:'flex flex-col'}" class="ring-0 rounded-none">
            <template #header>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            </template>
            <UButton 
                    v-for="link in quickLinks" :key="link.name" :to="link.href" 
                :label="link.name"
                variant="link"
                color="neutral"
                />
        </UCard>
        <UCard variant="solid" class="ring-0 rounded-none">
            <template #header>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
            </template>
            <div class="flex flex-col space-x-4">
                <UButton 
                    v-for="social in socialLinks" :key="social.name" :to="social.href" 
                    :label="social.name"
                    variant="link"
                    color="neutral"
                    target="_blank"
                    :icon="social.icon"
                />
            </div>
        </UCard>
        <UCard variant="solid" class="ring-0 rounded-none ">
            <template #header>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h3>
            </template>
            <div class="flex flex-col space-x-4">
                <UButton 
                    v-for="social in contactLinks" :key="social.name" 
                    :label="social.name"
                    variant="link"
                    color="neutral"
                    target="_blank"
                    :icon="social.icon"
                />
            </div>
            
        </UCard>
        <template #footer>
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    © 2025 bonsus. All rights reserved.
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    Powered by Nuxt 3, supabase, and firebase.
                </span>
                </div>
        </template>
    </UCard>

</footer>
   
</template>
<script setup lang="ts">

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
];

const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/bonsus', icon: 'i-simple-icons-twitter' },
    { name: 'YouTube', href: 'https://youtube.com/bonsus', icon: 'i-simple-icons-youtube' },
    { name: 'TikTok', href: 'https://tiktok.com/@bonsus', icon: 'i-simple-icons-tiktok' },
    { name: 'WhatsApp', href: 'https://wa.me/254700000000', icon: 'i-simple-icons-whatsapp' },
    { name: 'Facebook', href: 'https://facebook.com/bonsus', icon: 'i-lucide-facebook' },
    { name: 'Instagram', href: 'https://instagram.com/bonsus', icon: 'i-lucide-instagram' }
];
const contactLinks = [
    { name: '123 Moi Avenue, Nairobi, Kenya', icon:'i-lucide-pin'},
    {name: '+254 712 345 678' , icon: 'i-lucide-phone'},
    {name: 'WhatsApp Chat', icon: 'i-simple-icons-whatsapp'},
    {name: 'Mon-Sat: 9AM - 6PM' ,icon:'i-lucide-clock'}
]

</script>