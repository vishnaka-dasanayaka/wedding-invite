// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="text-xl font-bold">
            Powered by weddinginvites.lk
          </span>
          <p className="text-gray-400 mt-2">
            Creating beautiful wedding memories
          </p>
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sarah & Michael's Wedding. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
