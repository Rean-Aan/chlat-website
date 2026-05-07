<template>
    <div class="mt-8 flex flex-col gap-12 items-center justify-center">
        <img :src="image" :alt="name" class="h-64 w-auto object-contain rounded-3xl" draggable="false" />
        <div class="flex flex-col gap-2 text-center">
            <p class="text-[32px] font-bold">
                {{ name }}
            </p>
            <p class="text-gray-600">
                {{ role }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string
    role: string
    image: string
}>()
</script>