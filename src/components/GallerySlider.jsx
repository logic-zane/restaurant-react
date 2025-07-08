const images = [
  "food1.jpg",
  "food2.jpg",
  "food3.jpg",
  "food4.jpg",
  "food5.jpg",
  "food6.jpg",
];

export default function GallerySlider() {
  return (
    <section id="gallery" className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Tech-Inspired Creations</h2>
      <div className="flex gap-4 overflow-x-auto scroll-smooth max-w-6xl mx-auto pb-4">
        {Array.isArray(images) &&
          images.map((img, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0 rounded-lg shadow-lg bg-white overflow-hidden">
              <img
                src={`/images/${img}`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
