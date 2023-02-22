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
		name="img"
		@click="resizeImg"
	></slot>
	<div v-show="resize" :class="{ fullScreanWrapper: resize }">
		<div class="fullScreanContainer" @click="closeButton">
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
	height: var(--C100vh) !important;
	width: 99.5vw !important;

	background: #000000ad;

	.fullScreanImg {
		display: block;
		margin-inline: auto;
		width: 90vw;
		height: 90%;
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
