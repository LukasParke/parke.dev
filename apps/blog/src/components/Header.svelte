<script lang="ts">
  // Skeleton
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  // Utils
  import { SITE_TITLE } from "@src/consts";

  // For best results limit to 3-5 options max
  const navigation = [
    { label: "latest", href: "/" },
    { label: "all posts", href: "/posts" },
  ];
</script>

<header
  class="sticky top-0 z-10 border-b border-surface-800 bg-surface-950/80 backdrop-blur-xl"
>
  <AppBar class="bg-transparent container mx-auto">
    <AppBar.Toolbar class="grid-cols-[auto_1fr_auto] gap-10">
      <AppBar.Lead>
        <a
          href="/"
          title={SITE_TITLE}
          class="font-mono-brand flex items-center text-xl font-bold text-surface-50 no-underline"
        >
          <span class="text-secondary-400">&gt;</span><span>_</span><span
            class="cursor-blink ml-0.5"></span>
          <span
            class="ml-3 hidden text-sm tracking-[0.18em] text-surface-300 sm:inline"
          >
            parke.dev/blog
          </span>
        </a>
      </AppBar.Lead>
      <AppBar.Headline>
        <nav class="flex gap-2">
          {#each navigation as route}
            <a
              class="btn hover:preset-tonal-primary font-mono-brand text-xs uppercase tracking-widest"
              href={route.href}
            >
              {route.label}
            </a>
          {/each}
        </nav>
      </AppBar.Headline>
    </AppBar.Toolbar>
  </AppBar>
</header>
