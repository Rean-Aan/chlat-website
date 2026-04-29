<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
    <footer class="bg-[#0388D3] text-white px-8 py-10">

        <!-- Top section -->
        <div class="flex flex-col lg:flex-row justify-between gap-10">

            <!-- Logo and Description -->
            <NuxtLink :to="localePath('/')" class="flex flex-col gap-1">
                <img src="/logo.png" alt="chlat-logo" class="w-14">
                <p class="text-5xl lg:text-7xl font-bold">{{ t('chlat') }}</p>
            </NuxtLink>

            <!-- Links -->
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- About Us -->
                <div class="space-y-3">
                    <p class="text-lg lg:text-2xl">{{ t('about_us') }}</p>
                    <div class="flex flex-col gap-2 text-md font-thin opacity-80">
                        <NuxtLink :to="localePath('/mission')" class="hover:opacity-100 transition-opacity">{{
                            t('mission') }}</NuxtLink>
                        <NuxtLink :to="localePath('/contact-us')" class="hover:opacity-100 transition-opacity">{{
                            t('contact_us') }}</NuxtLink>
                    </div>
                </div>

                <!-- Privacy and Terms -->
                <div class="space-y-3">
                    <p class="text-lg lg:text-2xl">{{ t('privacy_and_terms') }}</p>
                    <div class="flex flex-col gap-2 text-md font-thin opacity-80">
                        <NuxtLink :to="localePath('/privacy')" class="hover:opacity-100 transition-opacity">{{
                            t('privacy') }}</NuxtLink>
                        <NuxtLink :to="localePath('/terms')" class="hover:opacity-100 transition-opacity">{{ t('terms')
                        }}</NuxtLink>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="space-y-3 col-span-2 lg:col-span-1">
                    <p class="text-lg lg:text-2xl">{{ t('social_media') }}</p>
                    <div class="flex flex-col gap-2 text-md font-thin opacity-80">
                        <NuxtLink to="https://www.facebook.com/profile.php?id=61580408446091" target="blank"
                            class="hover:opacity-100 transition-opacity">{{ t('facebook') }}</NuxtLink>
                        <NuxtLink to="https://telegram.me/REAN_AAN" target="blank"
                            class="hover:opacity-100 transition-opacity">{{ t('telegram') }}</NuxtLink>
                        <NuxtLink to="https://www.youtube.com/@chlatapp" target="blank"
                            class="hover:opacity-100 transition-opacity">{{ t('youtube') }}</NuxtLink>
                        <NuxtLink to="https://www.tiktok.com/@chlat_app" target="blank"
                            class="hover:opacity-100 transition-opacity">{{ t('tiktok') }}</NuxtLink>
                    </div>
                </div>

            </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-white/20 mt-10 pt-6 text-md font-thin opacity-70 text-center lg:text-left">
            {{ t('footer_description') }}
        </div>

    </footer>
</template>