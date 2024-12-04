import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { deleteGoal } from "../../../api/goals";

export const useDeleteGoal = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return deleteGoal(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.goals);
		},
		...options,
	});
};
