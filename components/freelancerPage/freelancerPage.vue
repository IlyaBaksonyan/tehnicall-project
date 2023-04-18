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
			<sidebar />
			<div class="container">
				<main id="main" class="style">
					<NuxtPage />
				</main>
			</div>
		</section>
		<div class="gap"></div>

		<IntrosPetProjects />
	</div>
</template>

<style scoped lang="scss">
.megaWrapper {
	scroll-snap-stop: always;
	z-index: 10;
	scroll-snap-type: y mandatory;
	height: var(--C100vh);
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 1px;
	}
}
#main {
	margin-top: var(--header-size);
}
.gap {
	height: 20vh;
}
.container {
	max-width: 1280px;
}
.freelance {
	scroll-snap-align: start;
	scroll-snap-stop: always;
	max-height: var(--C100vh);
	overflow-y: auto;
	animation: appear 1s ease;

	@keyframes appear {
		from {
			opacity: 0;
		}
	}
}

:deep(.style) {
	@import '~/assets/styles/freelancerPage.scss';
}
</style>
