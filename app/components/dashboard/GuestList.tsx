import GuestCard from "./GuestCard";

const guests = [
  {
    name: "Emily Thompson",
    status: "Attending",
    guests: "+2 guests",
    message:
      "So excited to celebrate with you both! Can't wait for the big day!",
    time: "2 days ago",
  },
  {
    name: "Rachel Martinez",
    status: "Not Attending",
    message: "Sorry I can't make it. Wishing you all the best!",
    time: "4 days ago",
  },
];

export default function GuestList() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Guest Responses</h2>
        <span className="text-xs text-gray-500">48 responses</span>
      </div>

      {guests.map((guest, i) => (
        <GuestCard key={i} {...guest} />
      ))}
    </div>
  );
}
