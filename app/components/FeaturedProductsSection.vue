<script setup lang="ts">
import type { Tables } from '~/types/database.types';

const toast = useToast()
const supabase = useSupabaseClient()
    const products = ref<Tables<'products'>[]>([])

const fetchProducts = async () => {
const {data , error } = await supabase.from('products').select().limit(3)
    if (error) {
        toast.add(
        {
            
        }
        )
    }
    if (data){
        products.value = data
    }
    

}
onMounted(() => {
    fetchProducts()
})
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <div>
            <h1 class="text-xl font-bold">Featured Products</h1>
            <p>Our best picks for quality and value</p>
        </div>
        <UButton label="View all products" variant="link" icon="i-lucide-arrow-right"/>
        <div class="grid md:grid-cols-3 gap-4 grid-cols-1">
            <ProductCard
                    v-for="product in products" 
                    :key="product.id" 
                    :is-grid="true" 
                    :conditions=[] 
                    :location=[]
                    :categories=[]
                    :product="product" />

        </div>
    </div>
</template>