<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const open =ref(false)
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
        to: '/contact',
        
    }
] )


</script>
<template>
<UPopover v-model:open="open">
    <UButton icon="i-lucide-menu" square  color="neutral" variant="subtle" />

    <template #content>
      <UNavigationMenu :items="items" orientation="vertical" class="size-48 m-4 inline-flex" />
    </template>
  </UPopover>
</template>