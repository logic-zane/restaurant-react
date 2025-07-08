// components/Contact.jsx
export default function Contact() {
    return (
      <section id="contact" className="bg-gray-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
  
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <form className="flex-1 bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border border-gray-300 p-3 rounded mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 p-3 rounded mb-4"
              />
              <textarea
                placeholder="Message"
                required
                rows={4}
                className="w-full border border-gray-300 p-3 rounded mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                Send
              </button>
            </form>
  
            {/* Contact Info */}
            <div className="flex-1 bg-white shadow-md rounded p-6">
              <h3 className="text-xl font-semibold mb-4">Our Information</h3>
              <p className="mb-2">
                <strong>Address:</strong> 123 Restaurant Street, Foodville
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> info@itshelter.com
              </p>
            </div>
          </div>
  
          {/* Map */}
          <div className="mt-8 rounded overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."  // replace with your real embed if needed
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our location"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  