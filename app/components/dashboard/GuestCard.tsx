type Props = {
  name: string;
  status: String;
  guests?: string;
  message?: string;
  time: string;
};

export default function GuestCard({
  name,
  status,
  guests,
  message,
  time,
}: Props) {
  const isAttending = status === "Attending";

  return (
    <div className="rounded-xl border bg-white p-4 space-y-1">
      <div className="flex justify-between">
        <p className="text-sm font-medium">{name}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      <p
        className={`text-xs font-medium ${
          isAttending ? "text-green-600" : "text-red-500"
        }`}
      >
        {isAttending ? "✅ Attending" : "❌ Not Attending"}{" "}
        {guests && <span className="text-gray-500">{guests}</span>}
      </p>

      {message && (
        <p className="mt-2 rounded-lg bg-gray-50 p-2 text-xs text-gray-600 italic">
          “{message}”
        </p>
      )}
    </div>
  );
}
