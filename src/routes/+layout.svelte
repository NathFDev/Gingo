<script>
	import TheNav from "$lib/components/TheNav.svelte";
	import "../app.css";
</script>

<TheNav />
<main class="flex flex-col min-h-[90vh]">
	<slot />
</main>
