<script lang="ts">
	import type { Project } from '$lib/data/profile';

	let { project }: { project: Project } = $props();

	const statusMeta = {
		online: { led: 'led-online', label: 'ONLINE' },
		building: { led: 'led-gold', label: 'BUILDING' },
		archived: { led: 'led-error', label: 'ARCHIVED' }
	} as const;
</script>

<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	class="card preset-outlined-surface-700-300 bg-surface-900 p-6 block space-y-3 transition-all
		hover:border-surface-500 hover:-translate-y-0.5 hover:glow-blue no-underline"
>
	<div class="flex items-center gap-2 font-mono-brand text-xs text-surface-300">
		<span class="led {statusMeta[project.status].led}" aria-hidden="true"></span>
		<span>{statusMeta[project.status].label}</span>
		<span class="ml-auto badge preset-tonal-primary text-xs">{project.category}</span>
	</div>
	<h3 class="h4 text-surface-50">{project.name}</h3>
	<p class="text-sm text-surface-300">{project.description}</p>
	<div class="flex flex-wrap gap-2">
		{#each project.tags as tag (tag)}
			<span class="chip preset-outlined-surface-700-300 font-mono-brand text-xs">{tag}</span>
		{/each}
	</div>
</a>
