import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { editNote } from "../../../api/notes";

export const useEditNote = (options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (variables) => {
			return editNote(variables);
		},
		onSettled: () => {
			queryClient.invalidateQueries(queryKeys.notes);
		},
		...options,
	});
};
