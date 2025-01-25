import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { updateUser } from "../../../api/user";

export const useUpdateUser = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return updateUser(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.user);
		},
		...options,
	});
};
