import * as SentryNode from "@sentry/node"
import crypto from "crypto"
import type { HandleServerError } from "@sveltejs/kit"

SentryNode.init({
	dsn: "https://2f2d0e65b743499d869a3ee3bf175102@o4504664414420992.ingest.sentry.io/4504664727224320",
})

export const handleError: HandleServerError = ({ error, event }) => {
	const errorId = crypto.randomUUID()
	SentryNode.captureException(error, {
		contexts: { sveltekit: { event, errorId } },
	})

	return {
		message: "An unexpected error occurred. We're working on it.",
		errorId,
	}
}
