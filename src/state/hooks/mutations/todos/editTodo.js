import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { editTodo } from "../../../api/todos";

export const useEditTodo = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return editTodo(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.todos);
		},
		...options,
	});
};
