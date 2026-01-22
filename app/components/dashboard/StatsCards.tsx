const stats = [
  { label: "Total", value: 48, color: "bg-rose-100", icon: "👥" },
  { label: "Attending", value: 42, color: "bg-green-100", icon: "✅" },
  { label: "Declined", value: 6, color: "bg-red-100", icon: "❌" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border bg-white p-3 text-center"
        >
          <div
            className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full ${stat.color}`}
          >
            {stat.icon}
          </div>

          <p className="text-lg font-semibold">{stat.value}</p>
          <p className="text-xs text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
