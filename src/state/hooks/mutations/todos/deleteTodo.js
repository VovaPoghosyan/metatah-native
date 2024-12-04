import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { deleteTodo } from "../../../api/todos";

export const useDeleteTodo = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return deleteTodo(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.todos);
		},
		...options,
	});
};
