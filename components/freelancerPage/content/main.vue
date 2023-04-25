<script setup lang="ts">
//components
import introSection from '../ui/sections/introSection.vue'
import usingSection from '../ui/sections/usingSection.vue'
import qualitiesSection from '../ui/sections/qualitiesSection.vue'
//components
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library

function changeContainer(state = false) {
	const mainContainerElement: HTMLElement = document.querySelector('.container')!
	state
		? (mainContainerElement.style.maxWidth = 'max(100vw, 65ch)')
		: mainContainerElement.removeAttribute('style')
}
function changeDefaultStyles(state = false) {
	const mainElement: HTMLElement = document.querySelector('main')!
	state ? mainElement.classList.remove('style') : mainElement.classList.add('style')
}

onMounted(() => {
	changeContainer(true)
	changeDefaultStyles(true)
})
onUnmounted(() => {
	changeContainer(false)
	changeDefaultStyles(false)
})
</script>

<template>
	<div class="CMS">
		<introSection />
		<usingSection />
		<qualitiesSection />
	</div>
</template>

<style scoped lang="scss"></style>
