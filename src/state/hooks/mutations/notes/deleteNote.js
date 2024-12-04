import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { deleteNote } from "../../../api/notes";

export const useDeleteNote = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return deleteNote(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.notes);
		},
		...options,
	});
};
