import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	console.log('Ran layout load');

	// Since we already have the session in locals from our hooks.server.ts,
	// we can just return it directly
	return {
		session: locals.session
	};
};
