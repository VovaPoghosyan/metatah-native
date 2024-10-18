export const queryKeys = {
	user: ["user"],
	goals: {
		all: ["goals"],
		byId: (id) => ["goals", id],
	},
	todos: {
		all: ["todos"],
		byId: (id) => ["todos", id],
	},
	notes: {
		all: ["notes"],
		byId: (id) => ["notes", id],
	},
	statistics: ["statistics"],
};
