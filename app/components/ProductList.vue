<script setup lang="ts">
import type { Tables } from '~/types/database.types';
import type { AcceptableValue} from '@nuxt/ui'

type Product = Tables<'products'>
const toast = useToast()
const selectedCategories = ref<AcceptableValue[]>([])
const selectedLocations = ref<AcceptableValue[]>([])
const selectedConditions = ref<AcceptableValue[]>([])  
const minPrice = ref<number>(0)
const maxPrice = ref<number>(500000)
const sortOption = ref('price_asc'); // Default sort option
const sortOptions = ref([
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' }
])
const supabase = useSupabaseClient()
    const products = ref<Product[]>()

const fetchProducts = async () => {
const {data , error } = await supabase.from('products').select()
    if (error) {
        toast.add(
        {
            
        }
        )
    }
    if (data){
        products.value  = data 
    }
    

}
watch(sortOption, (newOption) => {
  if (newOption === 'price_asc' && products.value) {
    products.value.sort((a: Product, b: Product) => a.selling_price - b.selling_price);
  } else if (newOption === 'price_desc' && products.value) {
    products.value.sort((a: Product, b: Product) => b.selling_price - a.selling_price);
  } else if (newOption === 'newest' && products.value) {
    products.value.sort((a: Product, b: Product) => new Date(b.created_at ?? '').getTime() - new Date(a.created_at ?? '').getTime());
  } else if (newOption === 'oldest' && products.value) {
    products.value.sort((a: Product, b: Product) => new Date(a.created_at ?? '').getTime() - new Date(b.created_at ?? '').getTime());
  }
});
const isGridView = ref(true)

function toggleView() {
    isGridView.value = !isGridView.value
}
const search = ref('')
const router = useRouter();
function handleSearch(){
  router.push({
    query: { search: search.value}
  }
  )
}
// --- FILTERED PRODUCTS LOGIC ---

const filteredProducts = computed(() => {
  if (!products.value) return
  return products.value.filter(product => {
    // ...existing filter logic...
    const matchesSearch : boolean = !search.value ||
      product.name.toLowerCase().includes(search.value.toLowerCase()) ||
      product.description?.toLowerCase().includes(search.value.toLowerCase())

    const matchesCategory = !selectedCategories.value.length ||
      selectedCategories.value.includes(product.category)

    const matchesCondition = !selectedConditions.value.length ||
      selectedConditions.value.includes(product.condition)

    const matchesLocation = !selectedLocations.value.length ||
      selectedLocations.value.includes(product.location)

    const price = product.selling_price
    const matchesPrice = ( (
      price >= minPrice.value && price <= maxPrice.value
    ))

    return matchesSearch as boolean && matchesCategory as boolean && matchesCondition && matchesLocation && matchesPrice
  }) 
})
const showSidebar = ref(false)
// ...existing code...
onMounted(() => {
  
    fetchProducts()
})
</script>
<template>
    <UCard :ui="{root:'w-full ring-0',header:'flex flex-col gap-2', body: 'flex flex-row gap-2 relative'}">
        <template #header>
            <h1 class="font-bold text-2xl">Browse Our Catalog</h1>
            <h2>Discover quality pre-owned items at unbeatable prices</h2>
            <UInput 
                v-model="search" 
                placeholder="Find Product ..."
                icon="i-lucide-search"
                class="w-full"
                size="xl"
                @change="handleSearch"
                @update:model-value="handleSearch"
                />
            <div class="w-full flex flex-row not-md:flex-col justify-between">
            <h1>{{ filteredProducts?.length || 0 }} products Found</h1>
                <div class="flex flex-row justify-end gap-2">
                <UButton icon="i-lucide-filter" @click="showSidebar=!showSidebar" class="md:hidden"/>

                    <UButtonGroup>
                <UButton
              icon="i-lucide-grid-2x2"
              color="neutral"
                variant="outline"
                active-variant="solid"
                active-color="primary"
                square
                :active="isGridView"
              @click="toggleView"
            />
            <UButton
              icon="i-lucide-list"
              color="neutral"
              variant="outline"
              square
              active-variant="solid"
                active-color="primary"
                :active="!isGridView"
                @click="toggleView"
            />
            </UButtonGroup>
            <USelect v-model="sortOption"  :items="sortOptions"  class="md:w-48" />
            </div>
            </div>

        </template>
        
            <ProductFilter 
                v-model:categories="selectedCategories"
                v-model:conditions="selectedConditions"
                v-model:stores="selectedLocations"
                v-model:min-price="minPrice"
                v-model:max-price="maxPrice"
                :data-show="showSidebar"
                 class="w-64 min-w-64 not-md:absolute data-[show=false]:not-md:hidden not-md:left-0 not-md:z-20"/>
            <div 
                    class="grid  gap-2"
                    :class="isGridView? 'md:grid-cols-3 grid-cols-2 ': 'grid-cols-1' " >
                
                <ProductCard
                    v-for="product in filteredProducts" 
                    :key="product.id" 
                    :is-grid="isGridView" 
                    :conditions="selectedConditions" 
                    :location="selectedLocations" :categories="selectedCategories" :product="product" />

        </div>
    </UCard>
</template>