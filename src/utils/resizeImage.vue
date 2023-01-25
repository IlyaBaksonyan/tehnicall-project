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
	<img class="img" @click="resizeImg" v-bind="$attrs" />
	<div :class="{ fullScreanImg: resize }" v-if="resize">
		<div @click="closeButton" class="fullScreanContainer">
			<img :class="{ fullScreanImg__img: resize }" v-bind="$attrs" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.fullScreanImg {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	height: 100vh !important;
	width: 99.5vw !important;

	background: #000000ad;

	&__img {
		position: relative;
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

.img {
	cursor: zoom-in;
}
</style>
