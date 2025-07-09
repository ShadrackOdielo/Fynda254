<script setup lang="ts">
const DashboardItems = [
    {
        label: 'Total Products',
        icon: 'i-lucide-package',
        content: '2',
        description: '2 available'
    },
    {
        label: 'Monthly Revenue',
        icon: 'i-lucide-bar-chart-3',
        content: 'KSh 130,000',
        description: '0 items sold'
    },
    {
        label: 'Customer Inquiries',
        icon: 'i-lucide-message-square',
        content: '2',
        description: '1 pending response'
    }
]
</script>
<template>
    <div class="w-full">
        <div class="w-full flex flex-col md:flex-row gap-4 py-4 justify-between">
            <UCard  v-for="item in DashboardItems" :key="item.label" class="divide-y-0 bg-primary w-full" >
                 <template #header>
                    <UBadge 
                        :trailing-icon="item.icon"
                        :label="item.label"
                        class="w-full justify-between"/>
                 </template>
                 <p>{{item.content}}</p>
                 <template #footer>
                    <p>{{item.description}}</p>
                 </template>
            </UCard>
        </div>
        <div class="flex flex-col md:flex-row gap-4 w-full">
            <UCard :ui="{body: 'gap-4 flex-col flex '}" class="w-full">
                <template #header>
                    <h1 class="font-bold text-xl">Quick Actions</h1>
                    <p>Frequently used operations</p>
                </template>
                <UButton
                 icon="i-lucide-plus" 
                    label="Add New Product"
                    block
                    />
                    <UButton 
                    icon="i-lucide-upload" 
                    label="Bulk Upload Products"
                    block
                    variant="outline"
                    color="neutral"
                    />
                    <UButton 
                        icon="i-lucide-message-square" 
                    label="View PEnding Enquiries"
                    block
                    variant="outline"
                    color="neutral"
                    /><UButton
                     icon="i-lucide-bar-chart-3" 
                    label="Generate Sales Report"
                    block
                    variant="outline"
                    color="neutral"
                    />
                    
            </UCard>
            <UCard class="w-full">
                <template #header>
                    <h1>Recent Activity</h1>
                    <p>Latest system updates</p>
                </template>
            </UCard>
        </div>
    </div>
</template>