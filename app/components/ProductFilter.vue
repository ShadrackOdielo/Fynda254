<script setup lang="ts">
import type { CheckboxGroupItem, CheckboxGroupValue } from '@nuxt/ui'
const categoryFilters = defineModel<CheckboxGroupValue[]>('categories')
const conditionFilters = defineModel<CheckboxGroupValue[]>('conditions')
const storeFilters = defineModel<CheckboxGroupValue[]>('stores')
const minPrice = defineModel<number>('min-price')
const maxPrice = defineModel<number>('max-price')

const categoryOptions = ref<CheckboxGroupItem[]>([
    {
        label:'Electronics',
        value: 'Electronics'
    },
    {
        label: 'Appliances',
        value: 'Appliances'
    },
    {
        label: 'Furniture',
        value: 'Furniture'
    },
    {
        label: 'Clothing',
        value: 'Clothing'
    },
    {
        label: 'Books',
        value: 'Books'
    },
    {
        label: 'Sports',
        value: 'Sports'
    }
])
   
const locationOptions = ref<CheckboxGroupItem[]>([
     {
        label:'Westlands Store',
        value: 'westlands'
    },
    {
        label: 'kilimani Store',
        value: 'kilimani'
    },
    {
        label: 'karen Store',
        value: 'karen'
    },
    {
        label: 'CBD Store',
        value: 'CBD'
    },
    
])

const priceRange = ref([0,5000000])

minPrice.value = priceRange.value[0]
maxPrice.value = priceRange.value[1]

const conditionOptions = ref<CheckboxGroupItem[]>([
     {
        label:'A - Excellent',
        value: 'A'
    },
    {
        label: 'B- Good',
        value: 'B'
    },
    {
        label: 'C-Fair',
        value: 'C'
    },
    {
        label: 'D-Poor ',
        value: 'D'
    },
    
])
const max = ref(5000000)
// const fetchPrices = async () => {
//     const {data ,error } = await useSupabaseClient().from('products')
//     .select('original_price')
//     .order('selling_price',{ascending: false}).limit(1).single()
//     if(error) throw error
//     if(data) return max.value =  data.original_price 
// }
// onMounted(fetchPrices())
</script>
<template>
    <UCard
        :ui="{header:'flex flex-row justify-between', body: 'flex flex-col gap-2'}"    
    >
        <template #header>
            <h1 class="text-xl font-bold">Filters</h1>
            <UButton 
                color="primary" 
                variant="link" 
                label="Clear All"
                @click="categoryFilters=[];storeFilters=[];conditionFilters=[]"
                />
        </template>
        <h2>Categories</h2>
<UCheckboxGroup
        v-model="categoryFilters"
        :items="categoryOptions"
        class="space-y-2"
        />        
        <h2>Condition</h2>
        <UCheckboxGroup v-model="conditionFilters"  :items="conditionOptions"/>
        <h2>Location</h2>
        <USelectMenu v-model="storeFilters" :items="locationOptions" />
        <h2>Price</h2>
        <USlider 
            v-model="priceRange" 
            :min="0"
            :max="max"
         tooltip/>  
         <div class="w-full justify-between flex flex-row">
            <h1>Ksh {{ priceRange[0] }}</h1><h1> ksh: {{ priceRange[1]  }}{{ max}}</h1>
         </div>          
    </UCard>
</template>