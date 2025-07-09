<script setup lang="ts">
import type { Tables } from '~/types/database.types';
import type { AcceptableValue } from '@nuxt/ui'
type Product  = Tables<'products'>
const props = defineProps<{
  product: Product
  categories : AcceptableValue[]
  conditions: AcceptableValue[]
  location: AcceptableValue[]
  isGrid: boolean
}>() 
const condition = async ()=> {if (props.product.condition == 'A')
                        return 'excellent'
                    else if (props.product.condition == 'B')
                    return 'Good'
                    else if (props.product.condition == 'C')
                        return 'Fair'
                    else
                        return 'Poor'
}
const mycondition = await condition()
// const isVisible = async ()=> {
//     if (props.categories.includes(props.product.category) )
//     return true 
//     else 
//      return false
// }
// const show = await isVisible()
</script>
<template>
    <UCard :data-isGrid="isGrid" :ui="{root:'p-0 md:p-0  ',body: 'relative flex p-0 md:p-0  ',footer:'w-full '}" :class="isGrid? 'flex flex-col': 'flex   w-full flex-row'">
        <NuxtImg 
            src="/placeholder.svg"
            class="object-cover  h-full  "
            />
            <UBadge 
                :color="product.condition=='A' ? 'primary' : 'secondary' "
                :label="mycondition"
                class="absolute top-2 left-2"
                variant="subtle"
                />
            <UBadge
                color="primary"
                :label="product.is_active==true ? 'Available' : 'Not Available'"
                class="absolute top-2 right-2"
                />
        <template #footer>
            <div class="flex flex-row justify-between w-full">
            <UBadge 
                :label="product.category" 
                variant="subtle"
                color="secondary"
            /> 
            <UBadge 
            icon="i-twemoji-star" 
            :label="product.rating as unknown as string" 
            size="xs"
            variant="soft"
            color="neutral"
            />
            </div>
            <h1 class="font-bold">{{ product.name }}</h1>
            <UButton icon="i-lucide-map-pin" variant="ghost" color="neutral" :label="product.location + ' Store'"/>
            <p class="text-primary text-2xl">KSH {{ props.product.selling_price }}</p>
            <p class="line-through">KSH {{ product.original_price}}</p>
        </template>
    </UCard>
</template>