export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Estamos aquí para ayudarte con todos tus trámites</h2>
            <p className="text-xl text-gray-400">Nuestros expertos legales te guiarán de la mano hasta la resolución de tu problema.</p>
          </div>

          {/* Items */}
          <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
              data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <path className="stroke-current text-purple-100"
                      d="M20 32h24v2H20v-2zm8-4h8v2h-8v-2zm-6-4h20v2H22v-2zm8-4h4v2h-4v-2z" strokeLinecap="square"
                      strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
              <h4 className="h4 mb-2">Preparación de taxes</h4>
              <p className="text-lg text-gray-400 text-center">Preparamos sus taxes y enmiendas, asegurándonos de que
                cumpla con todas las regulaciones fiscales y maximice sus beneficios fiscales.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32"/>
                <path className="stroke-current text-purple-100" d="M32 12v40m-20-20h40" strokeLinecap="square"
                      strokeWidth="2"/>
              </svg>
              <h4 className="h4 mb-2">Reparación de créditos</h4>
              <p className="text-lg text-gray-400 text-center">Ayudamos a mejorar su puntaje crediticio mediante la
                eliminación de errores en su reporte de crédito y la negociación con acreedores.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M0 0h22v22H0z"/>
                  <path className="stroke-current text-purple-300" d="M4 4h14v14H4z"/>
                </g>
              </svg>
              <h4 className="h4 mb-2">Traducción de documentos</h4>
              <p className="text-lg text-gray-400 text-center">Ofrecemos servicios de traducción profesional para
                documentos legales, educativos y personales, garantizando precisión y confidencialidad.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(22 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M0 12h20v6H0z"/>
                  <rect className="stroke-current text-purple-300" width="8" height="8" rx="2"
                        transform="translate(6 6)"/>
                </g>
              </svg>
              <h4 className="h4 mb-2">Servicios de contador</h4>
              <p className="text-lg text-gray-400 text-center">Proveemos servicios completos de contabilidad, incluyendo
                la gestión de libros, auditorías y planificación financiera para individuos y empresas.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <path className="stroke-current text-purple-100"
                      d="M22 40h20v-4H22v4zm0-8h20v-4H22v4zm0-8h20v-4H22v4zm2-8h16V12H24v4z" strokeLinecap="square"
                      strokeWidth="2"/>
              </svg>
              <h4 className="h4 mb-2">Trademarks y patentes.</h4>
              <p className="text-lg text-gray-400 text-center">Asistimos en la preparación y presentación de solicitudes de registro de marcas. Esto incluye la preparación de documentos necesarios y el seguimiento del proceso de registro hasta obtener la aprobación.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M2 22h20l-2-8h-8l-2-8h-8l-2 8H0z" />
                  <path className="stroke-current text-purple-300" d="M4 10h16l2 8H2z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Residencia permanente y permiso de trabajo</h4>
              <p className="text-lg text-gray-400 text-center">Facilitamos el proceso para la obtención de residencia permanente y permisos de trabajo, guiándolo a través de los requisitos legales y administrativos.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
