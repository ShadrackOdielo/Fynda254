<script setup lang="ts">
const items = [
    {
        label: '',
        icon: '',
        description:''
    },
    {
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },
    
]
const categoryItems = [
    {
        label: '',
        icon: '',
        description:''
    },
    {
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },
    
]
const successItems = [
    {
        label: '',
        icon: '',
        description:''
    },
    {
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },{
        label: '',
        icon: '',
        description:''
    },
    
]
</script>
<template>
    <div>
        <UBadge label="Sell to us"/>
        <h1>Turn Your Items Into Cash Today</h1>
        <p>Have items you no longer need? 
        We buy quality second-hand goods at competitive prices.
         From electronics to furniture, we're always looking for great items to add to our inventory.

        </p>
        <UButton 
            icon="i-lucide-dollar-sign" 
            trailing-icon="i-lucide-arrow-right" 
            label="Sell your items now"
            />
            <div>
                <UCard v-for="item in items" :key="item.label" >
                    <template #header>
                        <UButton :icon="item.icon"/>
                    </template>

                </UCard>
            </div>
            <h1>How It Works</h1>
            <p>Simple 4-step process to sell your items</p>
            <div>
                <UCard>

                </UCard>
            </div>
            <h1>What We Buy</h1>
            <p>We're interested in a wide variety of quality items</p>
            <div>
                <UCard v-for="category in categoryItems" :key="category.label">
                    <div class="flex flex-col gap-2">
                        <UIcon :name="category.icon" />
                        <h1>{{ category.label }}</h1>
                        <p>{{ category.description}}</p>
                    </div>


                </UCard>
            </div>
            <h1>Success Stories</h1>
            <p>See what our sellers are saying</p>
            <div>
                <UCard v-for="success in successItems" :key="success.label">
                    <div>
                        <p>{{ success.label}}</p>
                    </div>
                </UCard>
            </div>
    </div>
</template>