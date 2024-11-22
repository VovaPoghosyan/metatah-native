import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../../api/user";
import { queryKeys } from "../../../utils/queryKeys";

export const useLogoutUser = (options) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			return logoutUser();
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.user);
		},
		...options,
	});
};
