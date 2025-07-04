<script setup lang="ts">
</script>
<template>
    <div class="max-w-screen min-h-screen relative w-full flex flex-col ">
        <AppHeader/>
        <div class="min-h-screen bg-white">
        <slot/>
        </div>
        <AppFooter/>
    </div>
</template>