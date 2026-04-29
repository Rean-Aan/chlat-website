<script setup>
const { t } = useI18n()
</script>

<template>
    <section class="h-screen flex items-center justify-center bg-white">
        <div class="mx-auto space-y-4">
            <div>
                <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight">
                    {{ t('contact_us_page.title') }}
                </h1>
                <p class="mt-4 text-xl lg:text-[24px] text-gray-600 font-thin">
                    {{ t('contact_us_page.description') }}
                </p>
            </div>

            <div class="space-y-4 pt-20">
                <div class="space-y-2">
                    <p class="text-xl text-gray-600 font-thin">{{ t('contact_us_page.email') }}</p>
                    <NuxtLink to="mailto:hello@chlat.app" class="text-xl text-primary font-en">hello@chlat.app
                    </NuxtLink>
                </div>
                <div class="space-y-2">
                    <p class="text-xl text-gray-600 font-thin">{{ t('contact_us_page.our_office') }}</p>
                    <NuxtLink to="https://maps.app.goo.gl/xJ8vXroeshGUQHocA" target="blank"
                        class="text-xl text-primary text-wrap">{{
                            t('contact_us_page.our_office_address') }}</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>