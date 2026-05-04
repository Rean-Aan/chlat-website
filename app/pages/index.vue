<script setup lang="ts">
import SectionHero from '~/components/SectionHero.vue';

const { t } = useI18n()

</script>

<template>
    <main>
        <SectionHero :title="t('home_page.hero.title')" :description="t('home_page.hero.description')"
            image="/images/fun-learning.png" image-position="right" />

        <div class="bg-[#0388D3] p-10 text-center mx-auto">
            <h1 class="text-4xl lg:text-[48px] text-white font-bold leading-tight text-center">
                {{ t('home_page.kid_feature_section.title') }}
            </h1>
            <p class="mt-4 text-xl lg:text-[24px] text-white font-thin text-center">
                {{ t('home_page.kid_feature_section.description') }}
            </p>
        </div>

        <SectionHero :title="t('home_page.watch.title')" :description="t('home_page.watch.description')"
            image="/images/watch-feature.png" image-position="left" />

        <SectionHero :title="t('home_page.learn.title')" :description="t('home_page.learn.description')"
            image="/images/learn-feature.png" image-position="right" />

        <SectionHero :title="t('home_page.play.title')" :description="t('home_page.play.description')"
            image="/images/play-feature.png" image-position="left" />

        <div class="bg-[#0388D3] p-10 text-center mx-auto">
            <h1 class="text-4xl lg:text-[48px] text-white font-bold leading-tight text-center">
                {{ t('home_page.parent_feature_section.title') }}
            </h1>
            <p class="mt-4 text-xl lg:text-[24px] text-white font-thin text-center">
                {{ t('home_page.parent_feature_section.description') }}
            </p>
        </div>

        <SectionHero :title="t('home_page.parental_dashboard.title')"
            :description="t('home_page.parental_dashboard.description')" image="/images/parental-dashboard-feature.png"
            image-position="right" />

        <section id="get-the-app" class="min-h-screen flex justify-center items-center bg-[#c7eaff] px-6 py-16">
            <div class="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
                <img src="/images/lotus-leaf-left.png" alt="" class="w-20 md:w-32">
                <div class="flex flex-col gap-2">
                    <h1 class="text-3xl md:text-4xl lg:text-[48px] text-primary font-bold leading-tight">
                        {{ $t('home_page.download_section.title') }}
                    </h1>
                    <p class="text-base md:text-xl lg:text-[24px] text-gray-600 font-thin">
                        {{ $t('home_page.download_section.description') }}
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-3 items-center">
                    <NuxtLink to="https://apps.apple.com/kh/app/chlat-watch-learn-play/id6465174952" target="_blank">
                        <img src="/images/Download_on_the_App_Store_Badge.png" alt="" class="h-10 md:h-12"
                            draggable="false">
                    </NuxtLink>
                    <NuxtLink to="https://play.google.com/store/apps/details?id=com.asurraa.chlat&pcampaignid=web_share"
                        target="_blank">
                        <img src="/images/Google_Play_Store_badge.png" alt="" class="h-10 md:h-12" draggable="false">
                    </NuxtLink>
                    <NuxtLink to="https://chlat.app" target="_blank">
                        <img src="/images/Use_The_Web_App.png" alt="" class="h-10 md:h-12" draggable="false">
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>
