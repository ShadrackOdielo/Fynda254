<template>
    <div class="w-full bg-elevated  z-50 border-b shadow-sm flex flex-row justify-between top-0 sticky px-4">
        <NuxtLink to="/" class="w-full">
            <NuxtImg 
                src="/fynda254-logo.png"
                class="h-20 -auto"
            />
        </NuxtLink>
        <UNavigationMenu :items="items" variant='link' color="neutral" class="w-full justify-center  not-md:hidden" />
        <div class="flex w-full flex-row items-center align-center gap-2 justify-end not-md:hidden">
        <UButton 
            icon="i-simple-icons-whatsapp"
            label="WhatsApp"
            size="md"
            variant="outline"
            color="neutral"
             />
        <SellItemsModal />
            <UButton
                label="Admin"
                size="md"
                />
            </div>
            <BurgerMenu class=" justify-end flex md:hidden"/>

    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import BurgerMenu from './BurgerMenu.vue';

const items = ref<NavigationMenuItem[]>([
        {
        label: 'Browse Catalog',
        to: '/catalog'
    },
    {
        label: 'Categories',
        to: '/categories'
    },
    {
        label:'Sell Items'
    },
    {
        label:'About Us',
        to: '/about'
    },
    {
        label: 'Contact Us',
        to: '/contact'
    }
] )

</script>

<style lang="scss" scoped>

</style>