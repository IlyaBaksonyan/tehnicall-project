<template>
	<ClientOnly>
		<ParticlesComponent
			id="tsparticles"
			:particlesInit="particlesInit"
			:particlesLoaded="particlesLoaded"
			:options="particles"
		/>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'
import { ParticlesComponent } from 'particles.vue3'
import particles from './particles.json'

const particlesInit = async (engine: Engine) => {
	await loadFull(engine)
}

const particlesLoaded = async (container: any) => {
	console.log('Particles container loaded', container)
}
</script>

<style lang="scss">
@media (max-width: 768px) {
	#tsparticles {
		display: none;
	}
}
</style>
