<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="container mx-auto py-8 flex">
	<div class="relative ml-8 mr-2 max-w-2xl">
		{#each Object.entries(data) as [key, value]}
			<div id={key} class="mb-8">
				<h2 class="font-bold text-4xl leading-6 mb-4">{value.title}</h2>
				<p class="leading-6 text-md text-slate-400 text-justify">{value.content}</p>
			</div>
		{/each}
	</div>
	<aside class="absolute right-4 w-[16rem] z-20">
		<h4 class="font-semibold mb-4 leading-6 text-md text-slate-100">On this page</h4>
		<ul class="text-xl leading-6 text-slate-500">
			{#each Object.entries(data) as [key, _]}
				<li>
					<a
						href={"#" + key}
						class="block py-4 font-lg
            hover:text-slate-100">{key.charAt(0).toUpperCase() + key.slice(1)}</a
					>
				</li>
			{/each}
		</ul>
	</aside>
</div>
