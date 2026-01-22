// components/MemoryGallery.jsx
export default function MemoryGallery() {
  const memories = [
    { id: 1, alt: "Memory 1", src: "./2.webp" },
    { id: 2, alt: "Memory 2", src: "./pre_1.jpg" },
    { id: 3, alt: "Memory 3", src: "./3.jpg" },
    { id: 4, alt: "Memory 4", src: "./4.jpg" },
    { id: 5, alt: "Memory 5", src: "./5.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
      {memories.map((memory) => (
        <div
          key={memory.id}
          className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* Replace with actual images */}
          <div className="w-full h-full bg-linear-to-br from-rose-100  to-purple-100 ">
            <span className="text-3xl">
              <img
                src={memory.src}
                className="w-full h-full object-cover "
                alt=""
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
