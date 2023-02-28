<script setup lang="ts">
import { tsParticles } from 'tsparticles-engine'
</script>

<template>
	<section class="firstScreen">
		<div class="firstScreen__wrapper">
			<h1 class="icon-style">project</h1>
			<h2>Затеев Илья</h2>
			<h2>Front-end Developer</h2>
		</div>
	</section>
</template>

<style scoped lang="scss">
.firstScreen {
	display: flex;
	flex-direction: column;
	justify-content: center;

	&__wrapper {
		h2 {
			font-weight: 400;
		}
	}
}
</style>
