// components/Header.jsx
export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="h-[500px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-purple-500/30 z-10"></div>
        {/* Replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100"></div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-rose-200/20"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-purple-200/20"></div>

        {/* Main heading */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Sarah & Michael
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow">
            June 15, 2024 • Galle Face Hotel
          </p>
        </div>
      </div>
    </header>
  );
}
