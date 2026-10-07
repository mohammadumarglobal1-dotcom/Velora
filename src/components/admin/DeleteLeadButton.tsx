"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";

export function DeleteLeadButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Delete this lead? This cannot be undone.")) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setDeleted(true);
        // Remove the parent <tr> from DOM directly
        const btn = document.getElementById(`delete-btn-${id}`);
        const row = btn?.closest("tr");
        if (row) {
          row.style.transition = "opacity 0.3s";
          row.style.opacity = "0";
          setTimeout(() => row.remove(), 300);
        }
      } else {
        const data = await res.json();
        alert("Failed to delete: " + (data.error || "Unknown error"));
        setIsDeleting(false);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
      setIsDeleting(false);
    }
  };

  if (deleted) return null;

  return (
    <button
      id={`delete-btn-${id}`}
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-sm transition-all disabled:opacity-30"
      title="Delete Lead"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
