import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import InvitationLink from "@/app/components/dashboard/InvitationLink";
import StatsCards from "@/app/components/dashboard/StatsCards";
import ActionButtons from "@/app/components/dashboard/ActionButtons";
import GuestList from "@/app/components/dashboard/GuestList";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] px-4 py-6 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <DashboardHeader />
        <InvitationLink />
        <StatsCards />
        <ActionButtons />
        <GuestList />
      </div>
    </main>
  );
}
