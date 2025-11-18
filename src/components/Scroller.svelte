<script lang="ts">
  import { onMount } from "svelte";

  const texts = ["OpenAPI", "Food", "AI", "Cats", "Developer Tools"];

  type Slot = {
    id: string;
    content: string; // "old\n\nnew" or just "char"
    index: number; // 0 → show old row, 1 → show new row
    changed: boolean;
    position: number; // slot position (0..longestLength-1)
  };

  let currentIndex = $state(0);
  let currentText = $state(texts[0] ?? "");
  let previousText = $state("");
  let slots = $state<Slot[]>([]);
  let animationKey = $state(0);

  // longest string length across all texts
  const longestLength = Math.max(...texts.map((t) => t.length));

  // timing & easing (very similar to your example)
  const charDuration = 450;
  const intervalInMs = `${charDuration}ms`;
  const ease = "cubic-bezier(1, 0, 0, 1)";
  const baseDelay = 40; // global offset
  const perLetterDelay = 25; // stagger between letters

  function updateSlots(newText: string, oldText: string) {
    const next: Slot[] = [];

    const newLen = newText.length;
    const oldLen = oldText.length;

    // center each word inside the fixed board
    const newOffset = Math.floor((longestLength - newLen) / 2);
    const oldOffset = Math.floor((longestLength - oldLen) / 2);

    for (let pos = 0; pos < longestLength; pos++) {
      const newIdx = pos - newOffset;
      const oldIdx = pos - oldOffset;

      const newChar = newIdx >= 0 && newIdx < newLen ? newText[newIdx] : " ";
      const oldChar =
        oldText && oldIdx >= 0 && oldIdx < oldLen ? oldText[oldIdx] : " ";

      // only animate if we have an old string and the char actually changed
      const changed = !!oldText && newChar !== oldChar;

      const content = changed
        ? `${oldChar || " "}\n\n${newChar || " "}`
        : newChar || " ";

      next.push({
        id: `${pos}-${newChar}-${animationKey}`,
        content,
        index: 0, // always start at row 0 (old char)
        changed,
        position: pos,
      });
    }

    slots = next;

    // Don’t animate the very first render
    if (!oldText) return;

    // Kick the index to 1 on the next frame so CSS can animate top → smooth scroll
    requestAnimationFrame(() => {
      slots = slots.map((slot) =>
        slot.changed && slot.content.includes("\n\n")
          ? { ...slot, index: 1 }
          : slot
      );
    });
  }

  // Rebuild slots whenever the text changes
  $effect(() => {
    updateSlots(currentText, previousText);
  });

  onMount(() => {
    if (texts.length <= 1) return;

    const tick = () => {
      setTimeout(() => {
        previousText = currentText;
        currentIndex = (currentIndex + 1) % texts.length;
        currentText = texts[currentIndex];
        animationKey++;
        tick();
      }, 3000);
    };

    tick();
  });
</script>

<div class="ticker" aria-live="polite">
  {#each slots as slot (slot.id)}
    <span class="slot">
      <span
        class="slot-inner"
        style="
          --index: {slot.index};
          --interval: {intervalInMs};
          --ease: {ease};
          --delay: {baseDelay + slot.position * perLetterDelay}ms;
        "
      >
        <span>{slot.content}</span>
      </span>
    </span>
  {/each}
</div>

<style>
  .ticker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    /* font-size: clamp(2rem, 6vw, 4rem); */
    gap: 0.08em; /* spacing between letters */
    /* optional: make it obvious this is fixed width */
    /* border: 1px dashed red; */
  }

  .slot {
    display: inline-block;
    position: relative;
    line-height: 1em;
    height: 1em;
  }

  .slot-inner {
    height: 1em;
    display: inline-block;
    overflow-y: hidden;
  }

  /* sliding-text trick, per letter */
  .slot-inner > span {
    white-space: pre;
    position: relative;
    height: 100%;
    top: calc(var(--index) * -2em); /* 0 → old row, 1 → new row */
    transition: top var(--interval) var(--ease);
    transition-delay: var(--delay);
  }
</style>
