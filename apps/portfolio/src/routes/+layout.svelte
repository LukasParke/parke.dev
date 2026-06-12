<script lang="ts">
	import '../app.css';
	import RackLogo from '$lib/components/RackLogo.svelte';
	import { profile } from '$lib/data/profile';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="sticky top-0 z-10 border-b border-surface-700 bg-surface-950/80 backdrop-blur">
		<div class="container mx-auto max-w-5xl flex items-center gap-3 px-6 py-4">
			<a href="/" class="flex items-center gap-3 no-underline">
				<RackLogo size={28} />
				<span class="font-mono-brand font-semibold text-surface-50">
					parke<span class="text-secondary-400">.dev</span>
				</span>
			</a>
			<nav class="ml-auto flex items-center gap-1 font-mono-brand text-sm">
				<a href="#about" class="btn btn-sm hover:preset-tonal">about</a>
				<a href="#projects" class="btn btn-sm hover:preset-tonal">projects</a>
				<a
					href={profile.links.github}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-sm preset-filled-primary-500">github</a
				>
			</nav>
		</div>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-surface-700">
		<div
			class="container mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-3 px-6 py-6
				font-mono-brand text-xs text-surface-400"
		>
			<span>© {new Date().getFullYear()} {profile.name} · {profile.formerly}</span>
			<span class="flex items-center gap-2">
				<span class="led led-online" aria-hidden="true"></span>
				all systems operational · {profile.location}
			</span>
		</div>
	</footer>
</div>
