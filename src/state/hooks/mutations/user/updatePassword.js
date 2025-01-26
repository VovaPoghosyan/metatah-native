import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { updatePassword } from "../../../api/user";

export const useUpdatePassword = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return updatePassword(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.user);
		},
		...options,
	});
};
