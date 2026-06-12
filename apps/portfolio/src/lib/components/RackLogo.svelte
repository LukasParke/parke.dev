<script lang="ts">
	let { size = 32 }: { size?: number } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 160 160"
	xmlns="http://www.w3.org/2000/svg"
	aria-label="parke.dev rack mark"
>
	<rect x="2" y="2" width="156" height="156" rx="28" class="fill-surface-900 stroke-surface-700" stroke-width="3" />
	<rect x="32" y="38" width="96" height="20" rx="10" class="fill-primary-500" />
	<rect x="32" y="70" width="96" height="20" rx="10" class="fill-primary-600" />
	<rect x="32" y="102" width="96" height="20" rx="10" class="fill-primary-900" />
	<circle cx="112" cy="48" r="7" class="fill-secondary-400" />
	<circle cx="112" cy="48" r="13" class="fill-secondary-400" opacity="0.25" />
</svg>
