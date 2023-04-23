<script setup lang="ts">
//utils
import resizeImage from '@/utils/resizeImage.vue'
//
//type
import type { UsingSection } from '~/assets/interfaces/usingSection'

const props = defineProps({
	item_data: {
		type: Object as PropType<UsingSection>,
		default: () => Object
	}
})

const pathImg = '/images/freelancerPage/'
</script>
<template>
	<div class="CMS__using__section">
		<div class="CMS__using__heading">
			<h2>
				{{ props.item_data.heading }}
			</h2>
		</div>
		<div class="CMS__using__description">
			<p v-html="props.item_data.text" />
		</div>
		<div class="CMS__using__img">
			<resizeImage :src="pathImg + props.item_data.img" :alt="props.item_data.img" />
		</div>
	</div>
</template>
<style scoped lang="scss">
.CMS__using {
	&__section {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		grid-template-rows: 0.4fr 1fr;
		grid-template-areas:
			'heading img'
			'description img';
		gap: 0rem max(1vw, 15px);

		max-width: 100%;
		width: max(80%, 36rem);
		height: max(18vw, 10rem);

		box-shadow: inset 0px 0px 7px 2px #000000;
		background-color: #1a1919;
		border-radius: 20px;
		padding: max(1rem, 2vmax);
	}
	&__heading {
		grid-area: heading;
		align-self: end;
		> * {
			font-size: max(0.7rem, 2vw);
		}
	}
	&__description {
		grid-area: description;
		text-align: justify;
		overflow: auto;
		> * {
			font-size: max(0.4rem, 1vw);
		}
	}
	&__img {
		border-radius: 5%;
		overflow: hidden;
		grid-area: img;
		align-self: center;
	}
}
</style>
