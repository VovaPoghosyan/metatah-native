import { accessToken } from "../../services/auth";

export default function authHeader(contentType) {
  if (accessToken()) {
    return {
      Authorization: "Bearer " + accessToken(),
      "content-type": contentType || "application/json",
    };
  } else {
    return {};
  }
}
