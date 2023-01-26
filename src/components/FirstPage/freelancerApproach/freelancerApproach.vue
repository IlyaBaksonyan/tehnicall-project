<script setup lang="ts">
import { RouterLink } from 'vue-router'

import LeaderLine from 'leader-line-new'
</script>

<script lang="ts">
export default {
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
			<button id="1" class="btns__main">
				<RouterLink to="/freelancerPage">freelance</RouterLink>
			</button>
			<button id="2">gfdgf</button>
			<div id="3">gdfg</div>
			<button id="4">gfdgdfg</button>
			<div>fgd</div>
			<div class="btns__wrapper"></div>
			<div>start</div>
			<div id="end">end</div>
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
		height: 60vh;
		display: flex;
		justify-content: space-around;
		align-items: center;

		&__wrapper {
			display: flex;
			align-items: center;
		}
		&__main {
		}
	}
}

button {
	padding: 1vw 1vh;
	border: green solid 0.2vw;
}
</style>
