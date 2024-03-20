<script lang="ts">
	import type { ChangeEventHandler, MouseEventHandler } from 'svelte/elements';

	let selectedImage;

	const handleImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
		const file = (event?.target as HTMLInputElement)?.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		const image = new Image();

		image.src = URL.createObjectURL(file);
		image.onload = () => {
			const width = image.width;
			const height = image.height;
			if (width > 1024 || height > 1024) {
				alert('Image must be below 1024x1024px');
				return;
			}
		};

		reader.onloadend = () => {
			// Do something with the uploaded image
			const imageData = reader.result;
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};
</script>

<button
	on:click={(event) => {
		event.stopPropagation();
		// event.preventDefault();

		document.getElementById('files')?.click();
	}}
>
	<img src="icons/upload-image.svg" alt="uploaded icon" />
	<label style="cursor:pointer;"> + Upload Image</label>
	<input
		id="files"
		type="file"
		accept="image/jpeg, image/png"
		on:change={handleImageUpload}
		value="test"
		style="visibility:hidden;"
	/>
</button>

<style>
	button {
		border-radius: 12px;
		background: var(--Light-Purple, #efebff);
		position: relative;
		padding: 60px 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
		margin-top: 16px;
		margin-bottom: 24px;
		align-self: flex-start;
	}

	label {
		color: var(--Primary, #633cff);
		font-size: 16px;
		font-weight: 600;
		line-height: 150%;
	}

	input {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 10;
		border: solid 1px red;
	}
</style>
