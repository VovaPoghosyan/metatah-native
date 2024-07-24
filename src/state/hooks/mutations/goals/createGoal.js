import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { createGoal } from "../../../api/goals";

export const useCreateGoal = (options) => {
	const queryClient = useQueryClient();
	
	return useMutation({
		mutationFn: (variables) => {
			return createGoal(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.goals);
		},
		...options,
	});
};
