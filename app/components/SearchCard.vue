<script setup lang="ts">
const search = ref('')
const router = useRouter();
function handleSearch(){
  router.push( {path: '/catalog',
    
    query: { search: search.value}
  }
  )
}
</script>
<template>
    <section class="bg-white py-6 sm:py-8"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-white rounded-xl shadow-lg p-4 sm:p-6 -mt-8 sm:-mt-16 relative z-20"><div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div class="flex-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><input placeholder="What are you looking for? TV, sofa, refrigerator..." class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" type="text"></div><a class="w-full sm:w-auto" href="/catalog">
        <button @click="handleSearch" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-11 rounded-md w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 sm:px-8">Search</button>
    </a>
</div></div></div>
</section>
</template>