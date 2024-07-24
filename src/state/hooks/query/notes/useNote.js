import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getNote } from "../../../api/notes";

export const useNote = (options) => {
	return useQuery({
		queryKey: queryKeys.notes.byId(options.id),
		queryFn: () => getNote(options.id),
		...options,
	});
};
