<script setup lang="ts">
import ResizeImage from '~/utils/resizeImage.vue'
</script>

<template>
	<div class="block conclusion">
		<h2 id="conclusion"><nuxt-link to="#conclusion">Вывод</nuxt-link></h2>
		<p>Разработать лендинг могут все! Но кто справится с этим лучше?</p>
		<div class="block">
			<nuxt-link to="#explanation">
				<ResizeImage
					id="explanation"
					class="explanation"
					src="/images/freelancerPage/Compare.png"
				/>
			</nuxt-link>
			<p>
				Взято с
				<a
					href="https://vc.ru/clearmarketing/158785-skolko-dolzhna-stoit-razrabotka-sayta-i-k-komu-podatsya"
					target="_blank"
				>
					Ссылка
				</a>
			</p>
		</div>
	</div>
</template>

<style>
.style .firstScreen .echanges img {
	all: unset;
}

#explanation {
	--maxW: 57cqw;
	width: var(--maxW, 35vmin);
	max-width: 100% !important;
	min-width: 100%;
	left: 0;
	all: initial;
}
</style>
