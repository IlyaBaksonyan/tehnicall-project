<script lang="ts">
import Cross from '~~/assets/Icons/cross.vue'

export default {
	name: 'resizeImage',
	components: { Cross },
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
	<slot v-bind="$attrs" style="cursor: zoom-in" name="img" @click="resizeImg" />
	<transition name="wrapper">
		<div
			v-show="resize"
			:class="{ fullScreenWrapper: resize }"
			@click="closeButton"
			@wheel.prevent
			@touchmove.prevent
			@scroll.prevent
		>
			<Cross :color="`#fff`" />
			<transition name="img">
				<nuxt-img
					v-show="resize"
					:class="{ fullScreenImg: resize }"
					class="no"
					v-bind="$attrs"
					onerror="this.onerror=null; this.src='/images/No-code/gpt2.png'; console.log('fix it')"
				/>
			</transition>
		</div>
	</transition>
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
	body .fullScreenWrapper .fullScreenImg {
		width: unset !important;
	}
}

body .fullScreenImg {
	all: initial;
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

	.fullScreenImg {
		display: block;
		margin-inline: auto;
		max-width: 100%;
		max-height: 100%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
}
:deep(svg) {
	width: 8em !important;
	position: absolute !important;
	right: 0 !important;
	top: 0 !important;
	cursor: pointer;
}
.wrapper-enter-active {
	transition: all 333ms cubic-bezier(0.4, 0, 0.22, 1) 0s;
}

.wrapper-enter-from {
	opacity: 0;
}
.img-enter-active,
.img-leave-active {
	transition: all 333ms cubic-bezier(0.4, 0, 0.22, 1) 0s;
}

.img-enter-from {
	scale: 0;
}
.img-leave-to {
	opacity: 0;
}
</style>
