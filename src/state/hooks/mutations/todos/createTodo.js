import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { createTodo } from "../../../api/todos";

export const useCreateTodo = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return createTodo(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.todos);
		},
		...options,
	});
};
