<script lang="ts">
	let { command, cursor = false }: { command: string; cursor?: boolean } = $props();
</script>

<p class="font-mono-brand text-sm text-surface-300">
	<span class="text-primary-400">luke@parke</span><span class="text-surface-400">:~$</span>
	<span class="text-surface-50">{command}</span>
	{#if cursor}<span class="cursor-blink" aria-hidden="true"></span>{/if}
</p>
