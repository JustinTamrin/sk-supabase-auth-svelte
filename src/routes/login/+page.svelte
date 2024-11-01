<script lang="ts">
</script>

<main>
	<h1>Login</h1>
	<form action="" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button class="btn btn-primary">Login</button>
	</form>
	<form class="socials" method="POST" style="margin-top: 15px;">
		<button formaction="?/login&provider=github" class="btn btn-ghost">Github</button>
		<button formaction="?/login&provider=discord" class="btn btn-ghost">Discord</button>
		<button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
	</form>
</main>
