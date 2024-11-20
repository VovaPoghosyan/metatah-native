import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getAllTodos } from "../../../api/todos";

export const useTodos = (options) => {
	return useQuery({
		queryKey: queryKeys.todos.all,
		queryFn: getAllTodos,
		retry: 1,
		...options,
	});
};
