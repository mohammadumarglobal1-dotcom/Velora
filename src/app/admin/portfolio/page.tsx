export default function PortfolioAdminPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-serif text-white mb-2">Portfolio Management</h1>
          <p className="text-white/50">Manage your showcase projects.</p>
        </div>
        <button className="bg-white text-black px-4 py-2 font-medium text-sm rounded-sm hover:bg-white/90 transition-colors">
          Add New Project
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-sm p-12 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Portfolio CMS Coming Soon</h3>
        <p className="text-white/50 max-w-md mx-auto">
          The ability to dynamically add, edit, and remove portfolio projects directly from the admin dashboard will be available in the next update.
        </p>
      </div>
    </div>
  );
}
