<script setup lang="ts">
import type { TableColumn, DropdownMenuItem } from '@nuxt/ui'
import { useClipboard } from '@vueuse/core'
import type { Tables } from '~/types/database.types'

type Product = Tables<'products'>

const toast = useToast()
const { copy } = useClipboard()

const products = ref<Product[]>()
const supabase = useSupabaseClient()

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'condition',
    header: 'Condition'
  },
   {
    accessorKey: 'selling_price',
    header: 'Price'
  }, {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    id: 'action'
  }
]

function getDropdownActions(product :Product): DropdownMenuItem[][] {
  return [
    [
      {
        label: 'Copy user Id',
        icon: 'i-lucide-copy',
        onSelect: () => {
          copy(product.id.toString())

          toast.add({
            title: 'User ID copied to clipboard!',
            color: 'success',
            icon: 'i-lucide-circle-check'
          })
        }
      }
    ],
    [
      {
        label: 'Edit',
        icon: 'i-lucide-edit'
      },
      {
        label: 'Delete',
        icon: 'i-lucide-trash',
        color: 'error'
      }
    ]
  ]
}
const fetchProducts = async () => {
const {data , error } = await supabase.from('products').select()
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
  <UCard class="divide-y-0 ring-0">
    <template #header>
      <div>
        <h1>Product Management</h1>
        <p>Manage your inventory and product listings</p>
      </div>
        <UButton label="Add Products" />

    </template>
  <UTable :data="products" :columns="columns" class="flex-1">
    <template #name-cell="{ row }">
      <div class="flex items-center gap-3">
        <UAvatar
          :src="`https://i.pravatar.cc/120?img=${row.original.id}`"
          size="lg"
          :alt="`${row.original.name} avatar`"
        />
        <div>
          <p class="font-medium text-highlighted">
            {{ row.original.name }}
          </p>
          <p>
            {{ row.original.location }}
          </p>
        </div>
      </div>
    </template>
    <template #action-cell="{ row }">
      <UDropdownMenu :items="getDropdownActions(row.original)">
        <UButton
          icon="i-lucide-ellipsis-vertical"
          color="neutral"
          variant="ghost"
          aria-label="Actions"
        />
      </UDropdownMenu>
    </template>
    <template #selling_price-cell="{ row}">
      <p> Ksh {{ row.original.selling_price }}</p>
      <p class="">Ksh {{ row.original.original_price }}</p>
    </template>
  </UTable>
  </UCard>
</template>
