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
		},
		closeButton() {
			this.resize = false
		}
	}
}
</script>

<template>
	<slot
		v-bind="$attrs"
		style="cursor: zoom-in"
		@click="resizeImg"
		name="img"
	></slot>
	<div :class="{ fullScreanWrapper: resize }" v-show="resize">
		<div @click="closeButton" class="fullScreanContainer">
			<img :class="{ fullScreanImg: resize }" v-bind="$attrs" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.fullScreanWrapper {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	height: 100vh !important;
	width: 99.5vw !important;

	background: #000000ad;

	.fullScreanImg {
		display: block;
		margin-inline: auto;
		width: clamp(60vw, 155vmin, 95vw);
		top: 46%;
		transform: translateY(-50%);
	}
}

.fullScreanContainer {
	width: 100%;
	height: 100%;
	cursor: zoom-out;
}
</style>
