<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
    <footer class=" bg-[#0388D3] text-white p-10 flex justify-between">
        <!-- Logo and Description -->
        <NuxtLink :to="localePath('/')" class="space-y-2">
            <img src="/logo.png" alt="chlat-logo" srcset="" class="w-14">
            <div class="space-y-4">
                <p class="text-7xl font-bold">{{ t('chlat') }}</p>
                <p class="text-sm font-thin">{{ t('footer_description') }}</p>
            </div>
        </NuxtLink>

        <div class="flex justify-between space-x-8">
            <!-- About Us -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('about_us') }}</p>
                <div class="space-y-2 text-md font-thin flex flex-col text-gray">
                    <NuxtLink :to="localePath('/mission')">{{ t('mission') }}</NuxtLink>
                    <NuxtLink :to="localePath('/contact-us')">{{ t('contact_us') }}</NuxtLink>
                </div>
            </div>
            <!-- Privacy and Terms -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('privacy_and_terms') }}</p>
                <div class="space-y-2 text-md font-thin flex flex-col">
                    <NuxtLink :to="localePath('/privacy')">{{ t('privacy') }}</NuxtLink>
                    <NuxtLink :to="localePath('/terms')">{{ t('terms') }}</NuxtLink>
                </div>
            </div>
            <!-- Social Media -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('social_media') }}</p>
                <div class="space-y-2 text-md font-thin flex flex-col">
                    <NuxtLink to="#">{{ t('facebook') }}</NuxtLink>
                    <NuxtLink to="#">{{ t('telegram') }}</NuxtLink>
                    <NuxtLink to="#">{{ t('youtube') }}</NuxtLink>
                    <NuxtLink to="#">{{ t('tiktok') }}</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>