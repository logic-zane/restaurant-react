export default function HeroSection() {
    return (
      <section
        id="hero"
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold shadow-lg"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <h1>Welcome to IT'shelter</h1>
      </section>
    );
  }
  