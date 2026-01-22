import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/hero_bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md text-center">
        {/* Badge */}
        <span className="inline-block mb-4 rounded-full bg-white/90 px-4 py-1 text-xs font-medium text-gray-600 shadow">
          Digital Wedding Invitations Made Simple
        </span>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-serif font-semibold leading-tight text-gray-900 sm:text-4xl">
          Create Beautiful Digital Wedding Invitations
        </h1>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-600 sm:text-base">
          Share your special day with loved ones through elegant personalized
          digital invitations. Track RSVPs effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="rounded-xl bg-rose-300 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-400">
            Create Your Invitation
          </button>

          <Link href="/invitation" className="w-full">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
              Sample Invitation
            </button>
          </Link>
          <Link href="/dashboard" className="w-full">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
              Sample Dashboard
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
