export class PrismaClient {
  lead = {
    create: async (args?: any) => {
      console.log("Mock Prisma: Created lead", args);
      return { id: "1", ...args?.data, createdAt: new Date() };
    },
    count: async (args?: any) => {
      return 0;
    },
    findMany: async (args?: any) => {
      return [];
    }
  };
}
