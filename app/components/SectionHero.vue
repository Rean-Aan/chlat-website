<template>
    <section class="h-screen flex items-center justify-center bg-white">
        <div class="container mx-auto px-6 flex flex-col items-center gap-12"
            :class="imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'">
            <!-- Text -->
            <div class="flex-1 text-center lg:text-left">
                <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight text-center">
                    {{ title }}
                </h1>
                <p class="mt-4 text-xl lg:text-[24px] text-gray-600 font-thin text-center">
                    {{ description }}
                </p>

                <!-- Optional button -->
                <div v-if="$slots.action" class="mt-8 flex justify-center">
                    <slot name="action" />
                </div>
            </div>

            <!-- Image -->
            <div class="flex-1 flex justify-center select-none">
                <img :src="image" :alt="title" class="w-64 lg:w-full max-w-md object-contain select-none" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    title: string
    description: string
    image: string
    imagePosition?: 'left' | 'right'
}>(), {
    imagePosition: 'right'
})
</script>