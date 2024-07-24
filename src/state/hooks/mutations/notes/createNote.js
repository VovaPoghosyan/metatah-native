import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { createNote } from "../../../api/notes";

export const useCreateNote = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return createNote(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.notes);
		},
		...options,
	});
};
