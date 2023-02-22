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
:deep(body) {
	overflow: hidden;
}
.fullScreanWrapper {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	height: calc(var(--C100vh) - 1%) !important;
	width: 99.5vw !important;
	backdrop-filter: blur(5px);
	background: #000000ad;

	.fullScreanContainer {
		width: 100%;
		height: 100%;
		cursor: zoom-out;
	}
	.fullScreanImg {
		display: block;
		margin-inline: auto;
		width: 90%;
		height: auto;
		top: 50%; /* 3 */
		transform: translate(0, -50%);
	}
}
</style>
