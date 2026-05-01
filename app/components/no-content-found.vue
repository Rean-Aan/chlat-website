<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <section class="h-screen flex justify-center items-center">
        <div class="flex flex-col items-center gap-4 text-center">
            <img src="/images/lotus-leaf-left.png" alt="" class="w-24">
            <div>
                <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight">{{ $t('error_404') }}</h1>
                <p class="text-xl lg:text-[24px] text-gray-600 font-thin">{{ $t('error_404_description') }}</p>
            </div>
        </div>
    </section>
</template>