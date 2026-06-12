<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { profile, projects } from '$lib/data/profile';

	const categories = ['All', 'OpenAPI', 'Plex', 'Svelte', 'GitHub'] as const;
	let active = $state<(typeof categories)[number]>('All');

	const filtered = $derived(
		active === 'All' ? projects : projects.filter((p) => p.category === active)
	);
</script>

<svelte:head>
	<title>Luke Parke — parke.dev</title>
	<meta
		name="description"
		content="Luke Parke builds API specs, SDKs, and self-hosted infrastructure. Specs, SDKs, and servers."
	/>
</svelte:head>

<!-- ============ HERO ============ -->
<section class="container mx-auto max-w-5xl px-6 pt-20 pb-16 space-y-6">
	<p class="font-mono-brand text-xs tracking-[0.18em] uppercase text-surface-300">
		<span class="led led-gold mr-2" aria-hidden="true"></span>SYSTEM ONLINE — {profile.location.toUpperCase()}
	</p>
	<h1 class="h1 text-5xl md:text-6xl">
		Specs, SDKs,<br />and <span class="text-secondary-400">servers</span>.
	</h1>
	<p class="max-w-xl text-lg text-surface-300">{profile.bio}</p>
	<Prompt command="mv lukehagar.com parke.dev" cursor />
	<div class="flex flex-wrap gap-3 pt-2">
		<a
			href={profile.links.github}
			target="_blank"
			rel="noopener noreferrer"
			class="btn preset-filled-primary-500">GitHub</a
		>
		<a
			href={profile.links.blog}
			target="_blank"
			rel="noopener noreferrer"
			class="btn preset-filled-secondary-400-600">The OpenAPI Guy</a
		>
		<a
			href={profile.links.linkedin}
			target="_blank"
			rel="noopener noreferrer"
			class="btn preset-outlined-surface-500-500">LinkedIn</a
		>
	</div>
</section>

<!-- ============ ABOUT ============ -->
<section id="about" class="border-t border-surface-700">
	<div class="container mx-auto max-w-5xl grid gap-10 px-6 py-16 md:grid-cols-2">
		<div class="space-y-4">
			<p class="font-mono-brand text-xs tracking-[0.18em] uppercase text-surface-400">
				$ whoami
			</p>
			<h2 class="h2">About</h2>
			<p class="text-surface-300">
				I'm a software engineer passionate about Identity and Developer Experience. I maintain the
				community Plex API spec and its nine-language SDK suite, build OpenAPI tooling, and write
				about API design at <a href={profile.links.blog}>openapiguy.dev</a>.
			</p>
			<p class="text-surface-300">
				At home I run a rack of servers — everything on this site is self-hosted with Coolify,
				deployed from a closet in Austin.
			</p>
		</div>
		<div class="card preset-outlined-surface-700-300 bg-surface-900 p-6 space-y-4 self-start">
			<p class="font-mono-brand text-xs tracking-[0.18em] uppercase text-surface-400">
				$ cat ~/stack.txt
			</p>
			<div class="flex flex-wrap gap-2">
				{#each profile.stack as tech (tech)}
					<span class="chip preset-tonal-primary font-mono-brand text-xs">{tech}</span>
				{/each}
			</div>
			<hr class="hr border-surface-700" />
			<ul class="space-y-2 font-mono-brand text-sm text-surface-300">
				<li class="flex items-center gap-2">
					<span class="led led-online" aria-hidden="true"></span> identity &amp; devex @ sailpoint-oss
				</li>
				<li class="flex items-center gap-2">
					<span class="led led-online" aria-hidden="true"></span> 131 public repos · 9 SDK languages
				</li>
				<li class="flex items-center gap-2">
					<span class="led led-gold" aria-hidden="true"></span> homelab: many servers, one closet
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- ============ PROJECTS ============ -->
<section id="projects" class="border-t border-surface-700">
	<div class="container mx-auto max-w-5xl space-y-8 px-6 py-16">
		<div class="space-y-4">
			<p class="font-mono-brand text-xs tracking-[0.18em] uppercase text-surface-400">
				$ ls ~/projects
			</p>
			<h2 class="h2">Projects</h2>
		</div>

		<!-- Category filter -->
		<div class="flex flex-wrap gap-2">
			{#each categories as category (category)}
				<button
					type="button"
					class="chip font-mono-brand text-xs {active === category
						? 'preset-filled-secondary-400-600'
						: 'preset-outlined-surface-700-300'}"
					onclick={() => (active = category)}
				>
					{category.toLowerCase()}
				</button>
			{/each}
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each filtered as project (project.name)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
