import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../../api/user";
import { queryKeys } from "../../../utils/queryKeys";

export const useLoginUser = (options) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (variables) => {
			return loginUser(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.user);
		},
		...options,
	});
};
