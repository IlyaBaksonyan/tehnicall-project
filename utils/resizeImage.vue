<script setup lang="ts">
import Cross from '~~/assets/Icons/cross.vue'

let resize = ref(false)

function resizeImg() {
	resize.value = true
}

function closeButton() {
	resize.value = false
}
</script>

<template>
	<img v-bind="$attrs" style="cursor: zoom-in" @click="resizeImg" />

	<transition name="wrapper">
		<div
			v-show="resize"
			:key="10"
			class="fullScreenWrapper"
			@click="closeButton"
			@wheel.prevent
			@touchmove.prevent
			@scroll.prevent
		>
			<Cross :color="`#fff`" />
			<img id="fullScreenImg" :src="$attrs.src as string" />
		</div>
	</transition>
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
	body .fullScreenWrapper .fullScreenImg {
		width: unset !important;
	}
}

.fullScreenWrapper {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	height: 100vh;
	width: 100vw;
	backdrop-filter: blur(5px);
	background: #000000ad;
	cursor: zoom-out;
	overflow: auto;

	#fullScreenImg {
		all: unset;
		display: block;
		margin-inline: auto;
		max-width: 100%;
		max-height: 100%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		animation: appear 0.5s ease;

		@keyframes appear {
			from {
				scale: 0.95;
				opacity: 0;
			}
		}
	}

	:deep(svg) {
		width: 8em;
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
	}
}
.wrapper-enter-active,
.wrapper-leave-active {
	transition: all 333ms cubic-bezier(0.4, 0, 0.22, 1) 0s;
}

.wrapper-enter-from,
.wrapper-leave-to {
	opacity: 0;
}
</style>
