import { leadStore } from "@/lib/lead-store";
import { DeleteLeadButton } from "@/components/admin/DeleteLeadButton";

export default async function LeadsPage() {
  const leads = leadStore.getAll();

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold font-serif text-white mb-2">Lead Management</h1>
        <p className="text-white/50">View and manage all inquiries.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/5 text-xs uppercase font-medium text-white/40">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-20 text-center text-white/30">
                    No leads have been submitted yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white mb-1">{lead.name}</div>
                      <div className="text-xs text-white/40 max-w-[200px] truncate" title={lead.description}>
                        {lead.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white mb-1">{lead.email}</div>
                      {lead.whatsapp && (
                        <div className="text-xs text-white/50 font-medium">WA: {lead.whatsapp}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">{lead.company || "-"}</td>
                    <td className="px-6 py-4">{lead.service || "-"}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase bg-white/10 text-white rounded-sm">
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <DeleteLeadButton id={lead.id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
