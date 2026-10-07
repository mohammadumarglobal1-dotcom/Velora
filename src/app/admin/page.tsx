import { leadStore } from "@/lib/lead-store";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DeleteLeadButton } from "@/components/admin/DeleteLeadButton";

export default async function AdminDashboard() {
  const leads = leadStore.getAll();
  const totalLeads = leadStore.count();
  const newInquiries = leadStore.countByStatus("NEW");

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold font-serif text-white mb-2">Dashboard Overview</h1>
        <p className="text-white/50">Welcome back to the Velora admin portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric 1 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
          <p className="text-white/40 text-sm font-medium mb-4">Total Leads</p>
          <p className="text-5xl font-light text-white">{totalLeads}</p>
        </div>
        {/* Metric 2 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
          <p className="text-white/40 text-sm font-medium mb-4">New Inquiries</p>
          <p className="text-5xl font-light text-white">{newInquiries}</p>
        </div>
        {/* Metric 3 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
          <p className="text-white/40 text-sm font-medium mb-4">Active Projects</p>
          <p className="text-5xl font-light text-white">4</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-sm">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Recent Leads</h2>
          <Link href="/admin/leads" className="text-xs text-white/50 hover:text-white flex items-center gap-1">
            View All <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/5 text-xs uppercase font-medium text-white/40">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-white/30">
                    No leads found yet.
                  </td>
                </tr>
              ) : (
                leads.slice(0, 5).map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                    <td className="px-6 py-4">
                      <div className="text-white">{lead.email}</div>
                      {lead.whatsapp && <div className="text-xs text-white/50 mt-0.5">WA: {lead.whatsapp}</div>}
                    </td>
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
