<script setup lang="ts">

const { t, locale } = useI18n()
const { locales } = useI18n()

</script>

<template>
    <div>
        <form>
            <label for="locale-select">{{ $t('language') }}: </label>
            <select id="locale-select" v-model="locale">
                <option v-for="locale in locales" :key="locale.code" :value="locale.code">
                    {{ locale.name }}
                </option>
            </select>
        </form>
        <h1 class="text-3xl text-blue-500">{{ t('welcome') }}</h1>
    </div>
</template>
