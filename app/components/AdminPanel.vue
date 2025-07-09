<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
const items = ref<TabsItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-bar-chart-3',
    slot: 'dashboard' as const
  },
  {
    label: 'Products',
    icon: 'i-lucide-package',
    slot: 'product' as const
  },
  {
    label: 'Inquiries',
    icon: 'i-lucide-message-square',
    slot: 'inquiries' as const
  },
   {
    label: 'Activities',
    icon: '',
    slot: 'activities' as const
  },
   {
    label: 'Analytics',
    icon: 'i-lucide-bar-chart-3',
    slot: 'analytics' as const
  }
])
</script>
<template>
    <UCard>
          <UTabs :items="items" color="neutral" class="gap-4 w-full" :ui="{ trigger: 'grow' }">
            <template #dashboard>
                <AdminDashboardCard/>
            </template>
            <template #product>
                <AdminProductTable />
            </template>
            <template #inquiries>
                <p>hello</p>
            </template>
            <template #activities>
                <p>hi</p>
            </template>
            <template #analytics>
                <AdminAnalytics/>
            </template>

          </UTabs>
    </UCard>
</template>