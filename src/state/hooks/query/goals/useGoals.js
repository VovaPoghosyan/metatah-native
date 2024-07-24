import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getAllGoals } from "../../../api/goals";

export const useGoals = (options) => {
	return useQuery({
		queryKey: queryKeys.goals.all,
		queryFn: getAllGoals,
		...options,
	});
};
