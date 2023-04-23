<script setup lang="ts">
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library
//types
import { Pros, Cons } from '~/assets/interfaces/cmsQualities'
//types
//json
import json from '~/assets/letters/cmsQualities.json'
//json

const pros = ref<Array<Pros>>(json.pros)
const cons = ref<Array<Cons>>(json.cons)

function animationScroll() {
	const scroller = '.cmsSection'
	const container = '.CMS__qualities'

	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start bottom',
			scrub: 0.5,
			snap: {
				snapTo: 0.5,
				duration: 0.5,
				directional: true,
				ease: 'ease'
			},
			end: 'bottom'
		}
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
</script>
<template>
	<div class="CMS__qualities">
		<div class="CMS__qualities__leftPart">
			<ul>
				<li v-for="(item, i) in pros" :key="i"><b v-html="item.heading" /> {{ item.text }}</li>
			</ul>
		</div>
		<div class="CMS__qualities__rightPart">
			<ul>
				<li v-for="(item, i) in cons" :key="i"><b v-html="item.heading" /> {{ item.text }}</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
.CMS {
	&__qualities {
		display: flex;
		height: var(--C100vh);
		min-width: 100%;

		padding-inline: max(3vw, 10px);
		padding-block: max(3vmax, 15px);

		gap: 5%;

		text-align: justify;

		&__leftPart,
		&__rightPart {
			display: flex;
			width: 50%;
			font-weight: 400;
			ul {
				display: flex;
				flex-direction: column;
				gap: 7vh;
				font-size: max(1.8vmax, 0.6rem);
			}
		}

		&__leftPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/2705.svg);
			}
		}

		&__rightPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/274c.svg);
			}
		}
	}
}
</style>
