export default function InvitationLink() {
  return (
    <div className="rounded-xl border bg-white p-4 space-y-2">
      <p className="text-xs font-medium text-gray-500">Your Invitation Link</p>

      <div className="flex items-center gap-2 rounded-lg bg-rose-50 p-2">
        <input
          readOnly
          value="weddinginvite.lk/rsvp/sarah-michael"
          className="flex-1 bg-transparent text-xs text-gray-700 outline-none"
        />

        <button className="rounded-md bg-rose-300 px-3 py-1 text-xs font-medium text-white">
          📋
        </button>
      </div>
    </div>
  );
}
