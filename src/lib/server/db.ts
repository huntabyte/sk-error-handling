export async function getUser(username: string) {
	if (username !== "huntabyte") {
		throw new Error("Some super secret stuff in the error message")
	}

	return {
		username: "huntabyte",
		name: "Hunt A. Byte",
	}
}
