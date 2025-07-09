<script setup lang="ts">
const items = [
    {
        label: 'Total Views',
        icon: 'i-lucide-eye',
        content: '214'
    },
    {
        label: 'Conversion Rate',
        icon: 'i-lucide-bar-chart-3',
        content: '0.9%'
    },{
        label: 'Avg Response Time',
        icon: 'i-lucide-clock',
        content: '15 min'
    },
    {
        label: 'Customer Satisfaction',
        icon: 'i-lucide-users',
        content: '4.8/5'
    }
]
</script>
<template>
    <div>
        <h1 class="font-bold text-xl">Business Analytics</h1>
        <p>Track performance and customer insights</p>
        <div class="flex flex-col md:flex-row gap-4">
        <UCard v-for="item in items" :key="item.label" class="flex flex-row">
            <h1>{{ item.label}}</h1>
            <p>{{ item.content}}</p>
            <template #footer>
                <UIcon :name="item.icon" />
            </template>
        </UCard>
        </div>
    </div>
</template>