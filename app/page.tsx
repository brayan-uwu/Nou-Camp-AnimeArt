export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F7F7] text-gray-900 overflow-hidden">


      {/* HEADER */}
      <header className="w-full px-10 py-6 flex items-center justify-between z-20 relative animate-fade-in">
        <h1 className="text-3xl font-extrabold text-[#4A7F2E] tracking-wide">
          NouCampAnimeArt
        </h1>

        <nav className="flex gap-8 text-lg font-medium text-gray-700">
          <a href="#servicios" className="hover:text-[#4A7F2E] transition">Servicios</a>
          <a href="#productos" className="hover:text-[#4A7F2E] transition">Productos</a>
          <a href="#contacto" className="hover:text-[#4A7F2E] transition">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 px-10 mt-20 flex flex-col items-center text-center">

        <img
          src="/logo.jpg"
          alt="NouCampAnimeArt Logo"
          className="w-48 mb-6 opacity-90 drop-shadow-lg"
        />

        <h2 className="text-5xl font-extrabold mb-4 text-[#4A7F2E] drop-shadow-sm">
          Refleja tu pasión
        </h2>

        <p className="max-w-xl text-lg text-gray-700 leading-relaxed">
          Productos personalizados, ilustraciones y diseños a la medida de tu estilo.
          Creamos arte único inspirado en ti.
        </p>

        <a
          href="https://wa.me/52XXXXXXXX"
          className="mt-8 px-8 py-4 bg-[#7DBA4F] text-white font-semibold text-lg rounded-xl shadow-md hover:bg-[#6AA540] transform hover:scale-105 transition-all"
        >
          Contáctame por WhatsApp
        </a>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="px-10 mt-32 mb-20 animate-fade-in">
        <h3 className="text-4xl font-bold text-[#4A7F2E] mb-10 text-center">
          Servicios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Diseños Personalizados", desc: "Ilustraciones únicas basadas en tu estilo." },
            { title: "Productos Anime", desc: "Playeras, tazas, stickers y más." },
            { title: "Arte Digital", desc: "Comisiones digitales con acabados premium." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <h4 className="text-2xl font-semibold text-[#4A7F2E] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
