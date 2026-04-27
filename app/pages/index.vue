<script setup lang="ts">
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';

const { t } = useI18n()

</script>

<template>
    <Header class="sticky top-0 z-50" />

    <main>
        <section class="h-screen flex items-center justify-center bg-white">
            <h1 class="text-3xl text-blue-500">{{ t('welcome') }}</h1>
        </section>

        <section class="h-screen flex items-center justify-center bg-gray-50">
            <!-- Section 2 content -->
        </section>

        <section class="h-screen flex items-center justify-center bg-blue-50">
            <!-- Section 3 content -->
        </section>

        <section class="h-screen flex items-center justify-center bg-gray-100">
            <!-- Section 4 content -->
        </section>
    </main>

    <Footer />
</template>
