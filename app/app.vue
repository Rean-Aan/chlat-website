<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ]
})

useSeoMeta({
  title: t('site_name'),
  description: t('site_description'),
  ogTitle: t('site_name'),
  ogDescription: t('site_description'),
  ogImage: '/app-preview.png',
  ogUrl: 'https://chlat.app',
  ogType: 'website',
  ogSiteName: 'Chlat',
  twitterCard: 'summary_large_image',
  twitterImage: '/app-preview.png',
  twitterSite: '@chlat',
  twitterTitle: t('site_name'),
  twitterDescription: t('site_description'),
})

</script>