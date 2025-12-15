"use client";

import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`relative min-h-screen ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-[#F7F7F7] via-white to-[#E8F5E0] text-gray-900'
    } overflow-hidden transition-colors duration-300`}>
      
      {/* Decorative Background Elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 ${
        darkMode ? 'bg-[#5A9F3E]' : 'bg-[#7DBA4F]'
      } rounded-full blur-3xl opacity-10 animate-pulse`}></div>
      <div className={`absolute bottom-0 left-0 w-80 h-80 ${
        darkMode ? 'bg-[#3A6F1E]' : 'bg-[#4A7F2E]'
      } rounded-full blur-3xl opacity-10 animate-pulse`} style={{animationDelay: '1s'}}></div>

      {/* HEADER */}
      <header className={`w-full px-6 md:px-10 py-6 flex items-center justify-between z-20 relative backdrop-blur-sm ${
        darkMode ? 'bg-gray-900/70' : 'bg-white/70'
      } shadow-sm transition-colors duration-300`}>
        <h1 className={`text-2xl md:text-3xl font-extrabold ${
          darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'
        } tracking-wide flex items-center gap-2`}>
          <img
            src="/lojo.jpeg"
            alt="NouCampAnimeArt Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md"
          />
          NouCampAnimeArt
        </h1>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#portafolio" className={`${
              darkMode ? 'text-gray-300 hover:text-[#7DBA4F]' : 'text-gray-700 hover:text-[#4A7F2E]'
            } transition-all hover:scale-110`}>Portafolio</a>
            <a href="#servicios" className={`${
              darkMode ? 'text-gray-300 hover:text-[#7DBA4F]' : 'text-gray-700 hover:text-[#4A7F2E]'
            } transition-all hover:scale-110`}>Servicios</a>
            <a href="#productos" className={`${
              darkMode ? 'text-gray-300 hover:text-[#7DBA4F]' : 'text-gray-700 hover:text-[#4A7F2E]'
            } transition-all hover:scale-110`}>Productos</a>
            <a href="#contacto" className={`${
              darkMode ? 'text-gray-300 hover:text-[#7DBA4F]' : 'text-gray-700 hover:text-[#4A7F2E]'
            } transition-all hover:scale-110`}>Contacto</a>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            } transition-all transform hover:scale-110 shadow-md`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <span className="text-2xl">☀️</span> : <span className="text-2xl">🌙</span>}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 md:px-10 mt-16 md:mt-20 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className={`absolute inset-0 ${
            darkMode ? 'bg-[#5A9F3E]' : 'bg-[#7DBA4F]'
          } rounded-full blur-2xl opacity-20 animate-pulse`}></div>
          <img
            src="/lojo.jpeg"
            alt="NouCampAnimeArt Logo"
            className="relative w-40 md:w-56 rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 ${
          darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'
        } drop-shadow-sm leading-tight`}>
          Páginas web para tus<br/>
          <span className={darkMode ? 'text-[#9DD97D]' : 'text-[#7DBA4F]'}>XV Años y Eventos Especiales</span>
        </h2>

        <p className={`max-w-2xl text-lg md:text-xl ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        } leading-relaxed mb-4`}>
          Desarrollo de sitios web únicos para bodas, XV años, cumpleaños y eventos corporativos. También ofrecemos diseño de logos, ilustraciones personalizadas y productos exclusivos.
        </p>
        
        <p className={`max-w-xl text-base ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        } mb-8`}>
          ✨ <strong>Sitios web profesionales</strong> con invitaciones digitales, galerías y más • Precios desde $299
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center">
          <a href="https://wa.me/525645689216" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#1EBE57] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2">
            <span className="text-2xl">💬</span>Cotiza tu proyecto
          </a>
          <a href="https://www.facebook.com/profile.php?id=61584958147058" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#1877F2] to-[#0D65D9] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2">
            <span className="text-2xl">📘</span>Facebook
          </a>
          <a href="https://www.instagram.com/nouncampanimeart/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2">
            <span className="text-2xl">📸</span>Instagram
          </a>
        </div>
      </section>

      {/* PORTAFOLIO CON PREVIEWS */}
      <section id="portafolio" className={`px-6 md:px-10 py-20 mt-16 ${darkMode ? 'bg-gray-800/30' : 'bg-white'}`}>
        <div className="text-center mb-12">
          <h3 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'} mb-4`}>Proyectos Realizados</h3>
          <div className={`w-24 h-1 bg-gradient-to-r ${darkMode ? 'from-[#7DBA4F] to-[#5A9F3E]' : 'from-[#7DBA4F] to-[#4A7F2E]'} mx-auto rounded-full`}></div>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mira nuestros trabajos en vivo 👇</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Chiwaru */}
          <div className={`group ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-gray-50'} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#7DBA4F]`}>
            <div className="relative overflow-hidden h-80 bg-gray-100 rounded-t-3xl">
              <iframe src="https://chiwaru-jhwx.vercel.app/" className="w-full h-full scale-50 origin-top-left pointer-events-none" style={{width:'200%',height:'200%'}} title="Chiwaru Preview"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-4xl mb-2">🎨</div>
                <h4 className="text-2xl font-bold">Chiwaru</h4>
              </div>
            </div>
            <div className="p-8">
              <h4 className={`text-2xl font-bold ${darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'} mb-4`}>Chiwaru - Portfolio de Arte</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>Sitio web moderno para artista digital con galería interactiva, biografía y contacto. Diseño minimalista que resalta el trabajo artístico.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>React</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>Diseño Moderno</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>Responsive</span>
              </div>
              <a href="https://chiwaru-jhwx.vercel.app/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${darkMode ? 'from-[#7DBA4F] to-[#5A9F3E]' : 'from-[#7DBA4F] to-[#4A7F2E]'} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all`}>Ver Proyecto Completo<span>→</span></a>
            </div>
          </div>

          {/* Grupo Siddhi */}
          <div className={`group ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-gray-50'} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#7DBA4F]`}>
            <div className="relative overflow-hidden h-80 bg-gray-100 rounded-t-3xl">
              <iframe src="https://grupo-siddhi-d4ax.vercel.app/" className="w-full h-full scale-50 origin-top-left pointer-events-none" style={{width:'200%',height:'200%'}} title="Grupo Siddhi Preview"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-4xl mb-2">🏢</div>
                <h4 className="text-2xl font-bold">Grupo Siddhi</h4>
              </div>
            </div>
            <div className="p-8">
              <h4 className={`text-2xl font-bold ${darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'} mb-4`}>Grupo Siddhi - Corporativo</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>Sitio web profesional para empresa con secciones de servicios, sobre nosotros y contacto. Diseño elegante y profesional que transmite confianza.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>Next.js</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>Corporativo</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#7DBA4F]/20 text-[#9DD97D]' : 'bg-[#7DBA4F]/10 text-[#4A7F2E]'} font-semibold`}>Profesional</span>
              </div>
              <a href="https://grupo-siddhi-d4ax.vercel.app/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${darkMode ? 'from-[#7DBA4F] to-[#5A9F3E]' : 'from-[#7DBA4F] to-[#4A7F2E]'} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all`}>Ver Proyecto Completo<span>→</span></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>¿Quieres un sitio web así para tu evento o negocio?</p>
          <a href="https://wa.me/525645689216" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#1EBE57] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"><span className="text-2xl">💬</span>Solicita tu cotización</a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 md:px-10 py-20">
        <div className="text-center mb-12">
          <h3 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-[#7DBA4F]' : 'text-[#4A7F2E]'} mb-4`}>Nuestros Servicios</h3>
          <div className={`w-24 h-1 bg-gradient-to-r ${darkMode ? 'from-[#7DBA4F] to-[#5A9F3E]' : 'from-[#7DBA4F] to-[#4A7F2E]'} mx-auto rounded-full`}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {icon:"🌐",title:"Desarrollo Web",desc:"Páginas web profesionales y modernas para tu negocio o evento especial.",highlight:"Desde páginas para cumpleaños hasta sitios corporativos"},
            {icon:"🎨",title:"Diseño de Logos",desc:"Identidad visual única que represente la esencia de tu marca.",highlight:"Logos profesionales y memorables"},
            {icon:"✨",title:"Ilustraciones Personalizadas",desc:"Arte digital único basado en tu estilo y preferencias.",highlight:"Diseños anime y personalizados"},
            {icon:"🎂",title:"Páginas para Eventos",desc:"Sitios web especiales para cumpleaños y celebraciones.",highlight:"Precios accesibles y diseños únicos"},
            {icon:"🛍️",title:"Productos Personalizados",desc:"Playeras, tazas, stickers y más con tus diseños favoritos.",highlight:"Productos de alta calidad"},
            {icon:"💼",title:"Branding Completo",desc:"Imagen corporativa integral para impulsar tu negocio.",highlight:"Diseño profesional y cohesivo"}
          ].map((item)=>(
            <div key={item.title} className={`group p-8 ${darkMode?'bg-gray-800':'bg-white'} rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-transparent hover:border-[#7DBA4F] relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${darkMode?'from-[#5A9F3E] to-[#3A6F1E]':'from-[#7DBA4F] to-[#4A7F2E]'} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 -translate-y-16 translate-x-16`}></div>
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className={`text-2xl font-bold ${darkMode?'text-[#7DBA4F]':'text-[#4A7F2E]'} mb-3`}>{item.title}</h4>
              <p className={`${darkMode?'text-gray-300':'text-gray-600'} mb-3 leading-relaxed`}>{item.desc}</p>
              <p className={`text-sm ${darkMode?'text-[#9DD97D]':'text-[#7DBA4F]'} font-semibold`}>✓ {item.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className={`px-6 md:px-10 py-20 ${darkMode?'bg-gray-800/50':'bg-gradient-to-r from-[#4A7F2E]/5 to-[#7DBA4F]/5'}`}>
        <div className="text-center mb-12">
          <h3 className={`text-4xl md:text-5xl font-bold ${darkMode?'text-[#7DBA4F]':'text-[#4A7F2E]'} mb-4`}>Productos Destacados</h3>
          <div className={`w-24 h-1 bg-gradient-to-r ${darkMode?'from-[#7DBA4F] to-[#5A9F3E]':'from-[#7DBA4F] to-[#4A7F2E]'} mx-auto rounded-full`}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {title:"Arte Digital Premium",price:"Desde $299",icon:"🎨"},
            {title:"Páginas de Cumpleaños",price:"Desde $299",icon:"🎂"},
            {title:"Logos Profesionales",price:"Desde $399",icon:"✨"},
            {title:"Productos Personalizados",price:"Desde $149",icon:"🛍️"}
          ].map((p)=>(
            <div key={p.title} className={`p-8 ${darkMode?'bg-gray-800':'bg-white'} rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-6`}>
              <div className="text-6xl">{p.icon}</div>
              <div className="flex-1">
                <h4 className={`text-2xl font-bold ${darkMode?'text-[#7DBA4F]':'text-[#4A7F2E]'} mb-2`}>{p.title}</h4>
                <p className={`text-xl ${darkMode?'text-[#9DD97D]':'text-[#7DBA4F]'} font-semibold`}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 md:px-10 py-20 text-center">
        <h3 className={`text-4xl md:text-5xl font-bold ${darkMode?'text-[#7DBA4F]':'text-[#4A7F2E]'} mb-6`}>¿Listo para crear algo único?</h3>
        <p className={`text-xl ${darkMode?'text-gray-300':'text-gray-700'} mb-8 max-w-2xl mx-auto`}>Contáctanos hoy y hagamos realidad tu proyecto con precios accesibles y calidad profesional</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a href="https://wa.me/525645689216" target="_blank" rel="noopener noreferrer" className={`px-10 py-5 bg-gradient-to-r ${darkMode?'from-[#7DBA4F] to-[#5A9F3E]':'from-[#7DBA4F] to-[#4A7F2E]'} text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all flex items-center gap-3`}><span className="text-3xl">💬</span>Chatea con nosotros</a>
          <a href="mailto:noucampanimeart@gmail.com" className={`px-10 py-5 ${darkMode?'bg-gray-700 hover:bg-gray-600':'bg-gray-100 hover:bg-gray-200'} ${darkMode?'text-white':'text-gray-900'} font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all flex items-center gap-3 border-2 ${darkMode?'border-gray-600':'border-gray-300'}`}><span className="text-3xl">📧</span>Envía un correo</a>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://www.facebook.com/profile.php?id=61584958147058" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg" title="Facebook">f</a>
          <a href="https://www.instagram.com/nouncampanimeart/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] text-white flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg" title="Instagram">📷</a>
          <a href="mailto:noucampanimeart@gmail.com" className={`w-14 h-14 rounded-full ${darkMode?'bg-gray-700':'bg-gray-600'} text-white flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg`} title="Email">✉️</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 ${darkMode?'bg-gray-900':'bg-[#4A7F2E]'} text-white text-center transition-colors duration-300`}>
        <p className="text-lg font-semibold mb-2">NouCampAnimeArt</p>
        <p className="text-sm opacity-90">© 2024 - Todos los derechos reservados</p>
        <div className="mt-3 space-y-1">
          <p className="text-sm">📱 WhatsApp: 564-568-9216</p>
          <p className="text-sm">📧 noucampanimeart@gmail.com</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=61584958147058" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Facebook</a>
          <span className="opacity-50">•</span>
          <a href="https://www.instagram.com/nouncampanimeart/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Instagram</a>
        </div>
      </footer>
    </main>
  );
}