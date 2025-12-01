export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#E8F5E0] text-gray-900 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7DBA4F] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A7F2E] rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* HEADER */}
      <header className="w-full px-6 md:px-10 py-6 flex items-center justify-between z-20 relative backdrop-blur-sm bg-white/70 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#4A7F2E] tracking-wide flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="NouCampAnimeArt Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md"
          />
          NouCampAnimeArt
        </h1>

        <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          <a href="#servicios" className="hover:text-[#4A7F2E] transition-all hover:scale-110">Servicios</a>
          <a href="#productos" className="hover:text-[#4A7F2E] transition-all hover:scale-110">Productos</a>
          <a href="#contacto" className="hover:text-[#4A7F2E] transition-all hover:scale-110">Contacto</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 md:px-10 mt-16 md:mt-20 flex flex-col items-center text-center">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#7DBA4F] rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <img
            src="/logo.jpg"
            alt="NouCampAnimeArt Logo"
            className="relative w-40 md:w-56 rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#4A7F2E] drop-shadow-sm leading-tight">
          Refleja tu pasión,<br/>
          <span className="text-[#7DBA4F]">crea tu mundo</span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Desarrollo de páginas web, diseño de logos, ilustraciones personalizadas y productos únicos.
        </p>
        
        <p className="max-w-xl text-base text-gray-600 mb-8">
          🎉 <strong>Páginas para eventos de cumpleaños</strong> con precios accesibles
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://wa.me/525645689216"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#1EBE57] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="text-2xl">💬</span>
            WhatsApp
          </a>
          
          <button
            disabled
            className="px-8 py-4 bg-gradient-to-r from-[#1877F2] to-[#0D65D9] text-white font-semibold text-lg rounded-2xl shadow-lg opacity-70 cursor-not-allowed flex items-center gap-2"
          >
            <span className="text-2xl">📘</span>
            Facebook (Próximamente)
          </button>
          
          <button
            disabled
            className="px-8 py-4 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white font-semibold text-lg rounded-2xl shadow-lg opacity-70 cursor-not-allowed flex items-center gap-2"
          >
            <span className="text-2xl">📸</span>
            Instagram (Próximamente)
          </button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 md:px-10 mt-24 md:mt-32 mb-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-[#4A7F2E] mb-4">
            Nuestros Servicios
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7DBA4F] to-[#4A7F2E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: "🌐", 
              title: "Desarrollo Web", 
              desc: "Páginas web profesionales y modernas para tu negocio o evento especial.",
              highlight: "Desde páginas para cumpleaños hasta sitios corporativos"
            },
            { 
              icon: "🎨", 
              title: "Diseño de Logos", 
              desc: "Identidad visual única que represente la esencia de tu marca.",
              highlight: "Logos profesionales y memorables"
            },
            { 
              icon: "✨", 
              title: "Ilustraciones Personalizadas", 
              desc: "Arte digital único basado en tu estilo y preferencias.",
              highlight: "Diseños anime y personalizados"
            },
            { 
              icon: "🎂", 
              title: "Páginas para Eventos", 
              desc: "Sitios web especiales para cumpleaños y celebraciones.",
              highlight: "Precios accesibles y diseños únicos"
            },
            { 
              icon: "🛍️", 
              title: "Productos Personalizados", 
              desc: "Playeras, tazas, stickers y más con tus diseños favoritos.",
              highlight: "Productos de alta calidad"
            },
            { 
              icon: "💼", 
              title: "Branding Completo", 
              desc: "Imagen corporativa integral para impulsar tu negocio.",
              highlight: "Diseño profesional y cohesivo"
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-transparent hover:border-[#7DBA4F] relative overflow-hidden"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7DBA4F] to-[#4A7F2E] rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 -translate-y-16 translate-x-16"></div>
              
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-[#4A7F2E] mb-3">
                {item.title}
              </h4>
              
              <p className="text-gray-600 mb-3 leading-relaxed">
                {item.desc}
              </p>
              
              <p className="text-sm text-[#7DBA4F] font-semibold">
                ✓ {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="productos" className="px-6 md:px-10 py-20 bg-gradient-to-r from-[#4A7F2E]/5 to-[#7DBA4F]/5">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-[#4A7F2E] mb-4">
            Productos Destacados
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7DBA4F] to-[#4A7F2E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Arte Digital Premium", price: "Desde $299", icon: "🎨" },
            { title: "Páginas de Cumpleaños", price: "Desde $299", icon: "🎂" },
            { title: "Logos Profesionales", price: "Desde $399", icon: "✨" },
            { title: "Productos Personalizados", price: "Desde $149", icon: "🛍️" },
          ].map((product) => (
            <div
              key={product.title}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-6"
            >
              <div className="text-6xl">{product.icon}</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-[#4A7F2E] mb-2">
                  {product.title}
                </h4>
                <p className="text-xl text-[#7DBA4F] font-semibold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 md:px-10 py-20 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-[#4A7F2E] mb-6">
          ¿Listo para crear algo único?
        </h3>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Contáctanos hoy y hagamos realidad tu proyecto con precios accesibles y calidad profesional
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/525645689216"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-gradient-to-r from-[#7DBA4F] to-[#4A7F2E] text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all flex items-center gap-3"
          >
            <span className="text-3xl">💬</span>
            Chatea con nosotros
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <button 
            disabled
            className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-2xl opacity-70 cursor-not-allowed shadow-lg"
            title="Próximamente"
          >
            f
          </button>
          <button 
            disabled
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] text-white flex items-center justify-center text-2xl opacity-70 cursor-not-allowed shadow-lg"
            title="Próximamente"
          >
            📷
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#4A7F2E] text-white text-center">
        <p className="text-lg font-semibold mb-2">NouCampAnimeArt</p>
        <p className="text-sm opacity-90">© 2024 - Todos los derechos reservados</p>
        <p className="text-sm mt-2">📱 WhatsApp: 564-568-9216</p>
      </footer>
    </main>
  );
}