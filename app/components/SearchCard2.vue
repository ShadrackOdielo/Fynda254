<script setup lang="ts">
const search = ref('')
const router = useRouter()
function handleSearch() {
  router.push({
    path: '/catalog',
    
    query: { search: search.value }
  })
}
</script>

<template>
  <section class="bg-white py-6 sm:py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6 -mt-8 sm:-mt-16 relative z-20">
        <form @submit.prevent="handleSearch" class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div class="flex-1 relative">
            <UInput
              v-model="search"
              placeholder="What are you looking for? TV, sofa, refrigerator..."
              icon="i-lucide-search"
              size="xl"
              class="w-full"
              color="neutral"
              highlight
            />
          </div>
          <UButton
            type="submit"
            class="w-full sm:w-auto h-11 rounded-md px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white"
            size="xl"
          >
            Search
          </UButton>
        </form>
      </div>
    </div>
  </section>
</template>