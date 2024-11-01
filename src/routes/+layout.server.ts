import { supabaseClient } from '$lib/supabase';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const {
		data: { session }
	} = await supabaseClient.auth.getSession();
	return { session };
};
