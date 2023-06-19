export type User = {
  id: number;
  name: string;
};

const users: User[] = [];

export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: number) => users.find((user) => user.id === id),
    create: async (name: string) => {
      const user: User = { id: users.length + 1, name };
      users.push(user);
      return user;
    },
  },
};
