<script lang="ts">
export default {
	name: 'resizeImage',
	data() {
		return {
			resize: false
		}
	},
	methods: {
		resizeImg() {
			this.resize = true
			document.documentElement.style.overflow = 'hidden'
		},
		closeButton() {
			this.resize = false
			document.documentElement.removeAttribute('style')
		}
	}
}
</script>

<template>
	<slot
		v-bind="$attrs"
		style="cursor: zoom-in"
		name="img"
		@click="resizeImg"
	/>
	<div
		v-show="resize"
		:class="{ fullScreenWrapper: resize }"
		@click="closeButton"
	>
		<img
			:class="{ fullScreenImg: resize }"
			v-bind="$attrs"
		/>
	</div>
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
	.fullScreenImg {
		width: unset !important;
	}
}
.fullScreenWrapper {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	height: 100vh;
	width: 99.5vw !important;
	backdrop-filter: blur(5px);
	background: #000000ad;
	cursor: zoom-out;
	overflow: auto;

	.fullScreenImg {
		display: block;
		margin-inline: auto;
		max-width: 58vw !important;

		max-width: initial !important;
		top: 50% !important;
		transform: translate(0, -50%) !important;
	}
}
</style>
