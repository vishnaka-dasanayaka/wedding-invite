export default function ActionButtons() {
  return (
    <div className="flex gap-3">
      <button className="flex-1 rounded-lg bg-rose-300 py-2 text-sm font-medium text-white">
        📄 Export Excel
      </button>

      <button className="flex-1 rounded-lg border bg-white py-2 text-sm font-medium">
        🖨️ Print List
      </button>
    </div>
  );
}
