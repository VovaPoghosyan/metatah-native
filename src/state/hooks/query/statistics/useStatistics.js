import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getStatistics } from "../../../api/statistics";

export const useStatistics = (options) => {
	return useQuery({
		queryKey: queryKeys.statistics,
		queryFn: getStatistics,
		retry: 1,
		...options,
	});
};
