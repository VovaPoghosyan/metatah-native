import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../../api/user";
import { queryKeys } from "../../../utils/queryKeys";

export const useRegisterUser = (options) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (variables) => {
			return registerUser(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.user);
		},
		...options,
	});
};
