<script setup lang="ts">
//ui
import sidebar from './ui/sidebar/sidebar.vue'
//ui

const megaWrapper = ref()
const mainElement = ref()

function scrollToContent() {
	megaWrapper.value.scrollTo(0, mainElement.value.offsetTop)
}
function setFocusToTitle(state = false) {
	const headingLink = document.querySelector('h1 a') as HTMLElement
	const setFocusOnTitle = (e: KeyboardEvent) => {
		if (e.code == 'KeyP') {
			headingLink?.focus()
		}
	}

	state
		? document.addEventListener('keydown', setFocusOnTitle)
		: document.removeEventListener('keydown', setFocusOnTitle)
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	scrollToContent()
	setFocusToTitle(true)
})
onUnmounted(() => {
	setFocusToTitle(false)
})
onBeforeRouteLeave((to: any, from: any, next: () => void) => {
	ScrollTrigger.getAll().forEach((trigger: any) => {
		trigger.kill()
	})
	next()
})
</script>

<template>
	<div ref="megaWrapper" class="megaWrapper">
		<IntrosNoCode id="section" />
		<section id="section" ref="mainElement" class="cmsSection">
			<sidebar />
			<div class="container">
				<main id="main" class="style">
					<NuxtPage />
				</main>
			</div>
		</section>
		<IntrosFrameworks id="section" />
	</div>
</template>

<style scoped lang="scss">
.megaWrapper {
	scrollbar-width: none;
	scroll-snap-stop: always;
	z-index: 10;
	//scroll-snap-type: y mandatory;
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
:deep(#fullScreenImg) {
	max-height: 90% !important;
	margin-top: 2rem !important;
}
.cmsSection {
	scroll-snap-align: start;
	scroll-snap-stop: always;
	max-height: var(--C100vh);
	overflow-y: auto;
	animation: appear 1s ease;
	overflow-x: hidden;

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
