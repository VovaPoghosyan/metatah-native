import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { editGoal } from "../../../api/goals";

export const useEditGoal = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return editGoal(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.goals);
		},
		...options,
	});
};
