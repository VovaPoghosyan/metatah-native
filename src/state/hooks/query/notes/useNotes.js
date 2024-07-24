import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getAllNotes } from "../../../api/notes";

export const useNotes = (options) => {
	return useQuery({
		queryKey: queryKeys.notes.all,
		queryFn: getAllNotes,
		...options,
	});
};
