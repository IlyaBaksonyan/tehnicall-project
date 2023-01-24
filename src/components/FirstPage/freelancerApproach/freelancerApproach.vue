<script setup lang="ts">
import { RouterLink } from 'vue-router'

import './freelancerApproach-interfaces.vue'
</script>

<template>
	<section class="freelancerApproach" id="freelancerApproach">
		<h2>Подход фрилансера</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam labore,
			minima nisi est sequi aperiam doloribus culpa enim dignissimos ipsam vero
			non! Odio consequatur sapiente, omnis ullamconsectetur minima.
		</p>
		<RouterLink to="/freelancerPage">freelance</RouterLink>
	</section>
	<routerView />
</template>

<style scoped lang="scss"></style>
