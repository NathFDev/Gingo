<script>
	import bg from "$lib/assets/space-bg.webp";
	import TheFooter from "$lib/components/TheFooter.svelte";
	import begginer from "$lib/assets/beginner.webp";
	import intermediate from "$lib/assets/intermediate.webp";
	import expert from "$lib/assets/expert.webp";
</script>

<dialog id="modal_dialog" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box max-w-sm">
		<h3 class="font-bold text-lg text-center mb-4">Select Difficulties</h3>
		<div class="carousel w-full rounded-box">
			<div id="slide1" class="carousel-item relative w-full">
				<img src={begginer} class="w-full" alt="Beginner" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide3" class="btn btn-circle">❮</a>
					<a href="#slide2" class="btn btn-circle">❯</a>
				</div>
				<div class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[90%]">
					<a href="beginner" class="btn btn-primary">Beginner</a>
				</div>
			</div>
			<div id="slide2" class="carousel-item relative w-full">
				<img src={intermediate} class="w-full" alt="Intermediate" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide1" class="btn btn-circle">❮</a>
					<a href="#slide3" class="btn btn-circle">❯</a>
				</div>
				<div class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[90%]">
					<a href="intermediate" class="btn btn-primary">Intermediate</a>
				</div>
			</div>
			<div id="slide3" class="carousel-item relative w-full">
				<img src={expert} class="w-full" alt="Expert" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide2" class="btn btn-circle">❮</a>
					<a href="#slide1" class="btn btn-circle">❯</a>
				</div>
				<div class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[90%]">
					<a href="expert" class="btn btn-primary">Expert</a>
				</div>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<div class="hero min-h-screen" style="background-image: url({bg});">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-6xl font-bold">Hello There</h1>
			<p class="mb-5 text-md">
				Welcome to Gingo, the best website for learning Japanese language. Whether you are a
				beginner or an advanced learner, Gingo has something for you.
			</p>
			<button class="btn btn-primary" onclick="modal_dialog.showModal()">Get Started</button>
		</div>
	</div>
</div>

<TheFooter />
