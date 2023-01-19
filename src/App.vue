<script setup lang="ts">
import Header from './components/layout/Header/Header.vue'
import Footer from './components/layout/Footer/Footer.vue'
</script>

<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import firstScreen from './components/main/firstScreen/firstScreen.vue'
import noCode from './components/main/noCode/noCode.vue'
import freelancerApproach from './components/main/freelancerApproach/freelancerApproach.vue'
import developerApproach from './components/main/developerApproach/developerApproach.vue'

export default {
	name: 'Vue',
	components: {
		firstScreen,
		noCode,
		freelancerApproach,
		developerApproach
	}
}
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
