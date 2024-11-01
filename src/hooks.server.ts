import { supabaseClient } from '$lib/supabase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Directly use supabaseClient for your operations
	const {
		data: { session }
	} = await supabaseClient.auth.getSession();

	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event);
};
