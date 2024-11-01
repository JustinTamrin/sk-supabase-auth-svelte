import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	event.locals.sb = supabase;
	event.locals.session = session;

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => {
			return name === 'content-range';
		}
	});

	return response;
};
