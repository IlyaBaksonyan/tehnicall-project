<script lang="ts">
export default {
	data() {
		return {}
	}
}
</script>

<template>
	<li class="sidebar__section">
		<h4 class="sidebar__Title"><slot name="Title"></slot></h4>
		<ul class="sidebar__links">
			<slot></slot>
		</ul>
	</li>
</template>

<style scoped lang="scss">
.sidebar__section {
	padding-top: 1.25rem;
}
.sidebar__links {
	padding-left: 2.5ch;
	color: #aec2d3;
}

.sidebar__Title {
	font-size: 1.1rem;
}
</style>
