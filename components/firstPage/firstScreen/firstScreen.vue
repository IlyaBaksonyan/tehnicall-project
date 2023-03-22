<script setup lang="ts">
import particles from '~~/ui/particles/particles.vue'
</script>

<template>
	<section class="firstScreen">
		<div id="app">
			<particles />
		</div>
		<div class="container">
			<div class="firstScreen__wrapper">
				<div class="firstScreen__intro">
					<h1 class="icon-style">project</h1>
					<h2>Затеев Илья</h2>
					<h2>Front-end Developer</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.firstScreen {
	&__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		h2 {
			font-weight: 400;
		}
	}
}
</style>
