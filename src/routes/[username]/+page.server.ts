import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	throw new Error("Database Error: Could not retrieve user")
}
