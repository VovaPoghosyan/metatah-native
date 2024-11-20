import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getTodo } from "../../../api/todos";

export const useTodo = (options) => {
	return useQuery({
		queryKey: queryKeys.todos.byId(options.id),
		queryFn: () => getTodo(options.id),
		retry: 1,
		...options,
	});
};
