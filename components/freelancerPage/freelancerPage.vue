<script setup lang="ts">
//ui
import sidebar from './ui/sidebar/sidebar.vue'
//ui

function setFocusToTitle() {
	document.addEventListener('keydown', e => {
		if (e.code == 'KeyP') {
			;(document.querySelector('h1 a') as HTMLElement)?.focus()
		}
	})
}

onMounted(() => {
	setFocusToTitle()
	document.documentElement.style.overflow = 'hidden'
})
onUnmounted(() => {
	document.documentElement.removeAttribute('style')
})
</script>

<template>
	<div class="megaWrapper">
		<IntrosFreelancer />
		<div class="wrapper container">
			<sidebar />
			<main id="main" class="style">
				<NuxtPage />
			</main>
		</div>
		<IntrosNoCode />
	</div>
</template>

<style scoped lang="scss">
.megaWrapper {
	z-index: 10;

	scroll-snap-type: y mandatory;

	height: var(--C100vh);
	overflow-x: hidden;
}
.container {
	max-width: 1280px;
}

.wrapper {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(10, minmax(0, 1fr));
	scroll-snap-align: start;
	main {
		grid-column: 3 / 11;
		margin-top: var(--header-size);
		min-height: 100vh;
	}
}

:deep(.style) {
	@import '~/assets/styles/freelancerPage.scss';
}

@media (max-width: 1000px) {
	.wrapper {
		display: block;
	}
}
</style>
