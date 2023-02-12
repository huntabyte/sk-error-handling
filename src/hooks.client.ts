import * as SentrySvelte from "@sentry/svelte"
import type { HandleClientError } from "@sveltejs/kit"

SentrySvelte.init({
	dsn: "https://2f2d0e65b743499d869a3ee3bf175102@o4504664414420992.ingest.sentry.io/4504664727224320",
})

export const handleError: HandleClientError = ({ error, event }) => {
	const errorId = crypto.randomUUID()
	SentrySvelte.captureException(error, {
		contexts: { sveltekit: { event, errorId } },
	})

	return {
		message: "An unexpected error occurred. We're working on it!",
		errorId,
	}
}
