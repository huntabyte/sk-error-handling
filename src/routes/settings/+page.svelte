<div class="settings">
	<h2>Main Settings</h2>
	<form method="POST">
		<div>
			<label for="name">First Name</label>
			<input type="text" name="name" />
		</div>
		<button
			type="button"
			on:click={() => {
				throw new Error('Form submission gone bad')
			}}>Submit</button
		>
	</form>
</div>
