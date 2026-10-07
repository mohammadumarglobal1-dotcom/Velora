// Simple in-memory lead store (persists while server is running)
// In production, replace with real database

export interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  company?: string;
  service?: string;
  description: string;
  status: string;
  createdAt: Date;
}

// Global store persists between requests in the same server process
const globalStore = global as typeof globalThis & { leads: Lead[] };
if (!globalStore.leads) {
  globalStore.leads = [];
}

export const leadStore = {
  add(lead: Omit<Lead, "id" | "status" | "createdAt">): Lead {
    const newLead: Lead = {
      ...lead,
      id: Date.now().toString(),
      status: "NEW",
      createdAt: new Date(),
    };
    globalStore.leads.unshift(newLead);
    return newLead;
  },
  getAll(): Lead[] {
    return globalStore.leads;
  },
  count(): number {
    return globalStore.leads.length;
  },
  countByStatus(status: string): number {
    return globalStore.leads.filter((l) => l.status === status).length;
  },
  delete(id: string): boolean {
    const initialLength = globalStore.leads.length;
    globalStore.leads = globalStore.leads.filter((l) => l.id !== id);
    return globalStore.leads.length < initialLength;
  }
};
