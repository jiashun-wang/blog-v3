<script setup lang="ts">
import type { NavItem } from '~/types/nav'

defineProps<{
	list: NavItem[]
}>()
</script>

<template>
<menu>
	<UtilLink
		v-for="{ text, icon, url } in list"
		:key="text"
		v-tip="text"
		:to="url"
		:aria-label="text"
	>
		<img
			v-if="icon.startsWith('http')"
			:src="icon"
			alt=""
		>
		<Icon v-else :name="icon" />
	</UtilLink>
</menu>
</template>

<style lang="scss" scoped>
menu {
	display: flex;
	justify-content: center;

	a {
		padding: 0.5em;
		border-radius: 2em;
		transition: background-color 0.2s;

		&:hover {
			background-color: var(--c-bg-soft);
		}

		.iconify {
			display: block;
		}
	}

	img {
		width: 1.2em;
		height: 1.2em;
		vertical-align: -0.25em;
		display: block;
	}
}
</style>
