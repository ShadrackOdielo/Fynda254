<script setup lang="ts">
import  { productsInsertSchema } from '~/types/schemas'
import type * as z from 'zod'

type Schema = z.output<typeof productsInsertSchema>

const state = reactive<Partial<Schema>>({
})
</script>
<template>
  <UModal
    title="Sell Your Item to Fynda254"
    description="Fill out the details below and we'll contact you via WhatsApp to discuss purchasing your item"
  >
    <UButton label="Sell Items" color="neutral" variant="subtle" />

    <template #body>
        <UForm :state="state" :schema="productsInsertSchema" class="grid grid-cols-2 gap-2">
            <UFormField name="" label="">
                <UCard>
                    
                </UCard>
            </UFormField>
            <UFormField name="name" label="Name">
                <UInput  v-model="state.name"  />
            </UFormField>
            <UFormField name="description" label="Description">
                <UInput  v-model="state.description"  />
            </UFormField><UFormField name="category" label="Category">
                <UInput  v-model="state.category"  />
            </UFormField><UFormField name="condition" label="Condition">
                <UInput  v-model="state.condition"  />
            </UFormField><UFormField name="model" label="Model">
                <UInput  v-model="state.model"  />
            </UFormField><UFormField name="age" label="Age">
                <UInput  v-model="state.age"  />
            </UFormField><UFormField name="brand" label="Brand">
                <UInput  v-model="state.brand"  />
            </UFormField><UFormField name="selling_price" label="Selling Price">
                <UInput v-model="state.selling_price"  />
            </UFormField><UFormField name="asking_Price" label="Asking Price">
                <UInput  v-model="state.original_price"  />
            </UFormField>
        </UForm>
    </template>
  </UModal>
</template>
