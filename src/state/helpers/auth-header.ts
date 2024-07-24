import { getToken } from "./auth";

export default async function authHeader(contentType?: string) {
	const accessToken = await getToken();

	if (accessToken) {
		return {
			Authorization: "Bearer " + accessToken,
			"content-type": contentType || "application/json",
		};
	} else {
		return {};
	}
}
