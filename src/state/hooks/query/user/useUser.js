import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../api/user";
import { queryKeys } from "../../../utils/queryKeys";

export const useUser = (options) => {
  return useQuery({
    queryKey: queryKeys.user,
    queryFn: getUser,
		retry: 1,
    ...options,
  });
}
