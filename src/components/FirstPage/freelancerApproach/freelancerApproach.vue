<script setup lang="ts">
import { RouterLink } from 'vue-router'

import './freelancerApproach-interfaces.ts'
</script>

<template>
	<section class="freelancerApproach" id="freelancerApproach">
		<div class="heading">
			<h2>Подход фрилансера</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam
				labore, minima nisi est sequi aperiam doloribus culpa enim dignissimos
				ipsam vero non! Odio consequatur sapiente, omnis ullamconsectetur
				minima.
			</p>
		</div>
		<button class="btn__main">
			<RouterLink to="/freelancerPage">freelance</RouterLink>
		</button>
		<button>gfdgf</button>
	</section>
</template>

<style scoped lang="scss">
.freelancerApproach {
	.heading {
		text-align: center;
	}
	.btn {
		&__main {
		}
	}
}
</style>
