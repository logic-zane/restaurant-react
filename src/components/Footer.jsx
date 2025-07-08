// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p className="mb-2">
          Follow us:{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Facebook
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Instagram
          </a>
        </p>
        <p className="text-sm">Open Hours: Mon-Sat 11:00 AM – 10:00 PM</p>
      </footer>
    );
  }
  