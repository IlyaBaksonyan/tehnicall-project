<script setup lang="ts">
import { RouterLink } from 'vue-router'

import LeaderLine from 'leader-line-new'
</script>

<script lang="ts">
export default {
	data() {
		return {
			path: '/freelancerPage'
		}
	},
	mounted() {
		new LeaderLine(document.getElementById('1')!, document.getElementById('2')!)

		new LeaderLine(document.getElementById('3')!, document.getElementById('2')!)
	}
}
</script>

<template>
	<section class="freelancerApproach" id="freelancerApproach">
		<div class="heading">
			<h2 id="start">Подход фрилансера</h2>
			<p id="g">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam
				labore, minima nisi est sequi aperiam doloribus culpa enim dignissimos
				ipsam vero non! Odio consequatur sapiente, omnis ullamconsectetur
				minima.
			</p>
		</div>
		<div class="btns">
			<RouterLink class="btns__main" :to="{ path }">freelance</RouterLink>

			<router-link class="other g" :to="{ path }">lorem</router-link>
			<router-link class="other gg" :to="{ path }">lorem</router-link>
			<router-link class="other ggg" :to="{ path }">lorem</router-link>
		</div>
	</section>
</template>

<style scoped lang="scss">
.freelancerApproach {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.heading {
		text-align: center;
	}
	.btns {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;

		&__main {
		}
		.other {
			position: absolute;
		}

		.g {
			top: 40%;
			right: 35%;
		}

		.gg {
			right: 20%;
		}

		.ggg {
			right: 40%;
			bottom: 30%;
		}
	}
}
</style>
