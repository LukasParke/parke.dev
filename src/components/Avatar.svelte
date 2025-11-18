<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton-svelte";

  type Props = {
    image: string;
    name: string;
  };

  const { image, name }: Props = $props();

  const initials = name
    .split(" ")
    .map((name) => name[0])
    .join("");
</script>

<Avatar class="size-16">
  <Avatar.Image src={image} alt={name} />
  <Avatar.Fallback>{initials}</Avatar.Fallback>
</Avatar>
