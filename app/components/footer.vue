<script setup>
const { t } = useI18n()
</script>

<template>
    <footer class=" bg-[#0388D3] text-white p-10 flex justify-between">
        <!-- Logo and Description -->
        <div class="space-y-2">
            <img src="/logo.png" alt="chlat-logo" srcset="" class="w-14">
            <div class="space-y-4">
                <p class="text-7xl font-bold">{{ t('chlat') }}</p>
                <p class="text-sm font-thin">{{ t('footer_description') }}</p>
            </div>
        </div>

        <div class="flex justify-between space-x-8">
            <!-- About Us -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('about_us') }}</p>
                <div class="space-y-2 text-md font-thin cursor-pointer">
                    <p>{{ t('mission') }}</p>
                    <p>{{ t('contact_us') }}</p>
                </div>
            </div>
            <!-- Privacy and Terms -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('privacy_and_terms') }}</p>
                <div class="space-y-2 text-md font-thin cursor-pointer">
                    <p>{{ t('privacy') }}</p>
                    <p>{{ t('terms') }}</p>
                </div>
            </div>
            <!-- Social Media -->
            <div class="space-y-2">
                <p class="text-2xl">{{ t('social_media') }}</p>
                <div class="space-y-2 text-md font-thin cursor-pointer">
                    <p>{{ t('facebook') }}</p>
                    <p>{{ t('telegram') }}</p>
                    <p>{{ t('youtube') }}</p>
                    <p>{{ t('tiktok') }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>