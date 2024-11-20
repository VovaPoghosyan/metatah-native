import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getGoal } from "../../../api/goals";

export const useGoal = (options) => {
	return useQuery({
		queryKey: queryKeys.goals.byId(options.id),
		queryFn: () => getGoal(options.id),
		retry: 1,
		...options,
	});
};
