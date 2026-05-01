<script setup lang="ts">

const { t, locale } = useI18n()

const { data: page } = await useAsyncData(
    () => `terms-${locale.value}`,
    () => queryCollection('pages').path(`/${locale.value}/terms`).first()
)
useHead({
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/logo.png'
        }
    ]
})

useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
    ogTitle: page.value?.title,
    ogDescription: page.value?.description,
    ogImage: '/images/social-preview.png',
    ogUrl: 'https://chlat.app',
    ogType: 'website',
    ogSiteName: 'Chlat',
    twitterCard: 'summary_large_image',
    twitterImage: '/images/social-preview.png',
    twitterSite: '@chlat',
    twitterTitle: page.value?.title,
    twitterDescription: page.value?.description,
})
</script>

<template>
    <div class="screen">
        <div v-if="page" class="p-8 space-y-4">
            <div>
                <h1 class="text-3xl lg:text-[48px] text-primary font-bold leading-tight">{{ page?.title }}</h1>
                <p class="text-xl text-gray-400 font-light">{{ $t('last_update_date') }} {{ page?.lastmod }}</p>
            </div>

            <ContentRenderer
                class="prose prose-lg max-w-none prose-headings:no-underline prose-a:no-underline prose-p:leading-relaxed"
                :value="page" />
        </div>

        <NoContentFound v-else />
    </div>
</template>