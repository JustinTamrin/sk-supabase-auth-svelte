import { AuthApiError, type Provider } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const OAUTH_PROVIDERS = ['google', 'discord', 'github'];

export const actions: Actions = {
	login: async ({ request, locals, url }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: 'Provider not supported.'
				});
			}
			const { data, error: err } = await locals.sb.auth.signInWithOAuth({
				provider: provider
			});

			if (err) {
				console.log(err);
				return fail(400, {
					message: 'Something went wrong.'
				});
			}
			console.log(data);
			throw redirect(303, data.url);
		}
	}
};
