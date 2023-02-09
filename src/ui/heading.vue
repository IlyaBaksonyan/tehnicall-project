<script lang="ts">
export default {}
</script>

<template>
	<div class="heading">
		<h2><slot name="h2"></slot></h2>
		<p><slot name="p"></slot></p>
	</div>
</template>

<style scoped lang="scss">
h2 {
	font-size: max(1.8rem, 2cqw);
	letter-spacing: 0.1cqw;
	font-weight: 400;
}

p {
	font-size: max(1rem, 1cqw);
	font-weight: 500;
}
.heading {
	text-align: center;
}
</style>
