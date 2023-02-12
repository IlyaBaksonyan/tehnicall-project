<script setup lang="ts">
import Header from './components/layout/Header/Header.vue'
import Footer from './components/layout/Footer/Footer.vue'
</script>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
	name: 'Vue'
}
</script>

<template>
	<Header />

	<RouterView />

	<Footer />
</template>
