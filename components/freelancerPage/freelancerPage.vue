<script setup lang="ts">
//ui
import sidebar from './ui/sidebar/sidebar.vue'
//ui

const megaWrapper = ref()
const mainElement = ref()

function scrollToContent() {
	megaWrapper.value.scrollTo(0, mainElement.value.offsetTop)
}
function setFocusToTitle() {
	document.addEventListener('keydown', e => {
		if (e.code == 'KeyP') {
			;(document.querySelector('h1 a') as HTMLElement)?.focus()
		}
	})
}

onMounted(() => {
	scrollToContent()
	setFocusToTitle()
})
onUnmounted(() => {})
</script>

<template>
	<div ref="megaWrapper" class="megaWrapper">
		<IntrosNoCode />
		<div class="gap"></div>
		<section ref="mainElement" class="freelance">
			<div class="container">
				<div class="wrapper">
					<sidebar />
					<main id="main" class="style">
						<NuxtPage />
					</main>
				</div>
			</div>
		</section>
		<div class="gap"></div>

		<IntrosPetProjects />
	</div>
</template>

<style scoped lang="scss">
.megaWrapper {
	z-index: 10;
	scroll-snap-type: y mandatory;
	height: var(--C100vh);
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 1px;
	}
}
.gap {
	height: 20vh;
}
.container {
	max-width: 1280px;
}
.freelance {
	scroll-snap-align: start;
	max-height: var(--C100vh);
	overflow-y: auto;
}
.wrapper {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(10, minmax(0, 1fr));

	main {
		grid-column: 3 / 11;
		margin-top: var(--header-size);
		min-height: 100vh;
	}
	:deep(.sidebar) {
		grid-column: 1/3;
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
