<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header/Header.vue'
import Footer from './components/layout/Footer/Footer.vue'
import firstScreen from './components/main/firstScreen/firstScreen.vue'
import noCode from './components/main/noCode/noCode.vue'
import freelancerApproach from './components/main/freelancerApproach/freelancerApproach.vue'
import developerApproach from './components/main/developerApproach/developerApproach.vue'
</script>

<template>
	<div class="app">
		<Header />
		<div class="main">
			<div class="container">
				<firstScreen />
				<noCode />
				<freelancerApproach />
				<developerApproach />
			</div>
		</div>
		<Footer />
	</div>
</template>
